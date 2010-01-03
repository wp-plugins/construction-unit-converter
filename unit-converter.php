<?php
/*
Plugin Name: Unit Converter
Plugin URI: http://EcoLog-Homes.com
Description: Unit converter widget wordpress plugin, with focus on Construction industry and trades people
Author: EcoLog Homes Canada
Version: 1
Author URI: http://EcoLog-Homes.com
*/

function unitConverterForm()
{
	echo '<br/><br/><b>Conversion Type:</b>';
	echo '<select id="uc_conversiontype" style="width: 100%;" name="uc_conversiontype" onchange="Javascript: PopulateUnitTypes(this);"></select>';
  	echo '<br/><b>Quantity:</b>';
	echo '<div onkeyup="CalculateNow();">';
	echo '<input id="uc_txtSourceQty" name="uc_txtSourceQty" style="width: 100%;" onkeypress="CalculateNow()" onblur="CalculateNow()" />';
  	echo '<select id="uc_SourceUnit" style="width: 100%;" name="uc_SourceUnit" height="100" onchange="CalculateNow()"></select>';
	echo '<br/><b>converts to:</b>';
  	echo '<input id="uc_txtResultQty" name="uc_txtResultQty" readonly style="width:100%; font-weight:bold; background-color:#EEEEEE;" />';
  	echo '<select id="uc_ResultUnit" name="uc_ResultUnit" height="100" style="width: 100%;" onchange="CalculateNow()"></select>';
  	echo '<br/><br/><span style="font-size: 90%;">Construction Unit converter provided by: <b><a href="http://www.ecolog-homes.com" target="_blank">EcoLog Homes</a></b></span>';
  	echo '</div>';
}

function widget_myUnitConverter($args) {
	extract($args);
  
	$options = get_option("widget_myUnitConverter");
	if (!is_array( $options ))
	{
		$options = array(
			'title' => 'Unit Converter'
		);
	}      

	echo $before_widget;
	echo $before_title;
	echo $options['title'];
	echo $after_title;

	//Our Widget Content
    unitConverterForm();
  	echo $after_widget;
}

function myUnitConverter_control()
{
	$options = get_option("widget_myUnitConverter");
  
  	if (!is_array( $options ))
	{
		$options = array(
			'title' => 'Unit Converter'
		);
	}    

	if ($_POST['myUnitConverter-Submit'])
	{
		$options['title'] = htmlspecialchars($_POST['myUnitConverter-WidgetTitle']);
		update_option("widget_myUnitConverter", $options);
	}
	?>
	  <p>
	    <label for="myUnitConmverter-WidgetTitle">Widget Title: </label>
	    <input type="text" id="myUnitConverter-WidgetTitle" name="myUnitConverter-WidgetTitle" value="<?php echo $options['title'];?>" />
	    <input type="hidden" id="myUnitConverter-Submit" name="myUnitConverter-Submit" value="1" />
	  </p>
	<?php
}

function myUnitConverter_init()
{
	wp_enqueue_script('converterScript', get_bloginfo("wpurl").'/wp-content/plugins/unit-converter/converter.js'); 
	register_sidebar_widget(__('Unit Converter'), 'widget_myUnitConverter');
	register_widget_control(   'Unit Converter', 'myUnitConverter_control', 300, 200 );    
}

add_action("plugins_loaded", "myUnitConverter_init");
?>
