<!DOCTYPE html>
<html lang="en">
<head>
  <base href="{{ site.baseurl }}/"></base>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript Powered Forms and Form.io SDK</title>
  {% if page.template %}
    <link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/{{ page.template }}/bootstrap.min.css" rel="stylesheet">
  {% endif %}
  {% if page.template == nil %}
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  {% endif %}
  <link href="https://unpkg.com/bootstrap-vertical-tabs@1.2.2/bootstrap.vertical-tabs.min.css" rel="stylesheet">
  <link href="{{ site.baseurl }}/dist/formio.form.min.css" rel="stylesheet">
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
  <script src="{{ site.baseurl }}/dist/formio.wizard.min.js"></script>
</head>
<body>
<a href="https://github.com/formio/formio.js"><img style="position: absolute; top: 0; right: 0; border: 0;z-index:3000;" src="https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"></a>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="https://form.io">
        <img height="25px;" style="display: inline;" alt="Form.io" src="https://help.form.io/assets/formio-logo.png"> | JavaScript SDK Library
      </a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li {% if page.section == 'home' %}class="active"{% endif %}><a href="{{ site.baseurl }}"><span class="glyphicon glyphicon-home"></span></a></li>
        <li {% if page.section == 'examples' %}class="active"{% endif %}><a href="app/examples">Examples</a></li>
        <li {% if page.section == 'sdk'%}class="active"{% endif %}><a href="app/sdk">SDK</a></li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
</nav>
<div class="container" style="margin-top: 60px;">{{ content }}</div>
</body>
</html>
