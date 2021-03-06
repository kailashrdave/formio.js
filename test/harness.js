import assert from 'power-assert';
import _cloneDeep from 'lodash/cloneDeep';
import EventEmitter from 'eventemitter2';
import _merge from 'lodash/merge';
import _each from 'lodash/each';
export const Harness = {
  getDate: function() {
    let timestamp = (new Date()).getTime();
    timestamp = parseInt(timestamp / 1000, 10);
    return (new Date(timestamp * 1000)).toISOString();
  },
  testCreate: function(Component, componentSettings, settings) {
    settings = settings || {};
    let compSettings = _cloneDeep(componentSettings);
    _merge(compSettings, settings);
    var component = new Component(compSettings, {
      events: new EventEmitter({
        wildcard: false,
        maxListeners: 0
      })
    });
    return component.localize().then(() => {
      component.build();
      assert(!!component.element, 'No ' + component.type + ' element created.');
      return component;
    });
  },
  testElements: function(component, query, numInputs) {
    let elements = component.element.querySelectorAll(query);
    if (numInputs !== undefined) {
      assert.equal(elements.length, numInputs);
    }
    return elements;
  },
  testSetGet: function(component, value) {
    component.setValue(value);
    assert.deepEqual(component.getValue(), value);
    return component;
  },
  testSubmission: function(form, submission, onChange) {
    if (onChange) {
      form.on('change', onChange);
    }
    this.testSetGet(form, submission.data);
    assert.deepEqual(form.data, submission.data);
  },
  testErrors: function(form, submission, errors, done) {
    form.on('error', (err) => {
      _each(errors, (error, index) => {
        error.component = form.getComponent(error.component).component;
        assert.deepEqual(err[index], error);
      });
      done();
    });
    this.testSetGet(form, submission.data);
    assert.deepEqual(form.data, submission.data);
    form.submit();
  },
  testComponent: function(component, test, done) {
    let hasError = false;
    component.on('componentChange', (change) => {
      if (hasError) {
        assert.equal(change.value, test.good.value);
        done();
      }
      else {
        done(new Error('No error thrown'));
      }
    });
    component.on('componentError', (error) => {
      hasError = true;
      assert.equal(error.component.key, test.bad.field);
      assert.equal(error.message, test.bad.error);
      component.setValue(test.good.value);
    });

    // Set the value.
    component.setValue(test.bad.value);
  },
  testWizardPrevPage: function(form, errors, onPrevPage) {
    if (errors) {
      form.on('error', (err) => {
        _each(errors, (error, index) => {
          error.component = form.getComponent(error.component).component;
          assert.deepEqual(err[index], error);
        });
      });
    }
    if (onPrevPage) {
      form.on('prevPage', onPrevPage);
    }
    return form.prevPage();
  },
  testWizardNextPage: function(form, errors, onNextPage) {
    if (errors) {
      form.on('error', (err) => {
        _each(errors, (error, index) => {
          error.component = form.getComponent(error.component).component;
          assert.deepEqual(err[index], error);
        });
      });
    }
    if (onNextPage) {
      form.on('nextPage', onNextPage);
    }
    return form.nextPage();
  }
};
