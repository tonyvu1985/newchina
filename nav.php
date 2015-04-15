<link rel="icon" type="image/ico" href="images/favicon.ico"/>
<body ng-app="validationApp" ng-controller="mainController">
<div class="wrapper">
<meta name="robots" content="nofollow, noindex" />
<link rel="stylesheet" href="css/main.css">
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="assets/javascripts/bootstrap.js"></script>
<script src="angularjs/angular.min.js"></script>
<script src="angularjs/hoc.js"></script>
<!-- for heading -->
<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:700' rel='stylesheet' type='text/css'>
<!-- text -->
<link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>

<nav class="navbar navbar-default" id="navbar-mobile">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Home</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">About<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="about.php">About Hoc</a></li>
                  <li><a href="article.php">Media Articles</a></li>
                </ul>
        </li>
        <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Treatments <span class="caret"></span></a>
         <ul class="dropdown-menu" role="menu">
          <li><a href="acupuncture.php">Acupuncture</a></li>
          <li><a href="herbs.php">Herbs</a></li>
          <li><a href="cupping.php">Cupping</a></li>
          <li><a href="moxibustion.php">Moxibustion</a></li>
          <li><a href="tuina.php">Tuina</a></li>
        <li><a href="fund.php">Health Funds</a></li>
        </ul></li>
        <li class=""><a href="condition.php">Conditions</a></li>
        <li class=""><a href="nutrition.php">Nutrition</a></li>
        <li class=""><a href="faq.php">FAQ</a></li>
        <li class=""><a href="contact.php">Contact</a></li>

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<ul class="nav nav-justified" id="navbar-desktop">
	<li class="homeMenu"><a href="/">Home</a></li>
	<li class="aboutMenu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">About<span class="caret"></span></a>
		<ul class="dropdown-menu" role="menu">
		  <li><a href="about.php">About Hoc</a></li>
		  <li><a href="article.php">Media Articles</a></li>
		</ul>
	</li>
	<li class="treatmentMenu dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Treatments <span class="caret"></span></a>
	 <ul class="dropdown-menu" role="menu">
	  <li><a href="acupuncture.php">Acupuncture</a></li>
	  <li><a href="herbs.php">Herbs</a></li>
	  <li><a href="cupping.php">Cupping</a></li>
	  <li><a href="moxibustion.php">Moxibustion</a></li>
	  <li><a href="tuina.php">Tuina</a></li>
	<li><a href="fund.php">Health Funds</a></li>
	</ul></li>
	<li class="conditionMenu"><a href="condition.php">Conditions</a></li>
	<li class="nutritionMenu"><a href="nutrition.php">Nutrition</a></li>
	<li class="faqMenu"><a href="faq.php">FAQ</a></li>
	<li class="contactMenu"><a href="contact.php">Contact</a></li>

</ul>

<div class="container" style="margin-top:20px">
	<div class="col-md-6 col-xs-12">
		<a href="/"><img src="images/new-china-acupuncture-logo.png" alt="new china acupuncture logo" /></a>
	</div>

	<div class="text-right col-md-6 col-xs-12">
		<p><a href="document/Health-Funds.pdf" class="btn btn-info" target="_blank" alt="All major health funds accepted">All major health funds accepted</a></p>
	<!--	<h4>SYDNEY CBD & FAIRFIELD</h4>-->
		<h4>Sydney CBD (02) 8095 0822<br/>Fairfield (02) 9724 4560<br/>Mobile 0418 297 698</h4>
	</div>
</div>
