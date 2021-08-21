var tn=0;
var a,b,c=0;
var n=0;
var op1=0;
var op2=0;
var count=0;

var wep=16.415;//g
var wec=38.206;//g
var samp=50;//ml

var dataset=[[0.36,0.388,0.02,0.0172],
			 [0.398,0.42,0.02,0.2],
			 [0.39,0.42,0.022,0.0256],
			 [1.18,1.21,0.018,0.0254],
			 [0.38216,0.39278,0.0062,0.009],
			 [1.62188,1.63982,0.00574,0.0274],
			 [1.62188,1.63782,0.0074,0.0054],
			 [0.444,0.456,0.028,0.005]];

//to generate random numbers
var p=Math.floor(Math.random()*(8));

	//tss calculation
	var data1=(wep + dataset[p][0]).toFixed(4); 
	var data2=(wep + dataset[p][1]).toFixed(4);
	var tss=parseInt((((data2-data1)*1000)/samp)*1000);
	//tds calculation
	var data3=wec;
	var data4=(wec + dataset[p][2]).toFixed(4);
	var tds=parseInt((((data4-data3)*1000)/samp)*1000);
	//FSS calculation
	var data5=(wec + dataset[p][3]).toFixed(4);
	var fss=parseInt((((data5 - wec)*1000)/samp)*1000);
	//VSS calculation
	var vss=tss-fss;
    var ts= tss + tds;

var ca;
var questions=["At what temperature filter paper is</br> allowed to dry in hot air oven?",
			   "Filter paper with solids is ignited in a</br> muffle furnace at ______ &deg;C temperature.",
			   "Dessicator is used to prevent </br>the sample from external moisture?",
			   "The TDS present in water are one </br>of the leading causes of turbidity</br> and sediments in drinking water?"];
var options2=[["101","102","103","104"],//103
			  ["600","601","602","603"],//600
			  ["True","False"],//true
			  ["True","False"]];//False

function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}


//to prevent entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function navNext()
{
	for(temp=0;temp<=16;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

// function counter(id,dataCount,time)
// {
	// var $this = $(id),
    // countTo = dataCount;
	// $({ countNum: $this.text()}).animate({
		// countNum: countTo
		// },
		// {
			// duration: time,
			// easing:'linear',
			// step: function() {
			  // $this.text(Math.floor(this.countNum));
		// },
		// complete: function() {
		  // $this.text(this.countNum);
		  // //alert('finished');
		// }

	// }); 
// }

var looper;
    var degrees = 0;
    var cnt=0;
	var degrees;
	var i=0,k=0;
    function rotateAnimation(el,speed)
	{
	    var elem = document.getElementById(el);
	    if(navigator.userAgent.match("Chrome"))
		{
		     elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Firefox"))
		{
		     elem.style.MozTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("MSIE"))
		{
		     elem.style.msTransform = "rotate("+degrees+"deg)";
	    } 
		else if(navigator.userAgent.match("Opera"))
		{
		     elem.style.OTransform = "rotate("+degrees+"deg)";
	    } 
		else 
		{
		     elem.style.transform = "rotate("+degrees+"deg)";
	    }
	     looper = setTimeout('rotateAnimation(\''+el+'\','+speed+')',speed);
	   
	   degrees++;
}


function magic()
{
	if(simsubscreennum==1) 
	{
		$("#1-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==2)
	{
		tn=2;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:610px; top:300px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-3b").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-3b").onclick="";
			$("#"+tn+"-3b").animate({"position":"absolute","top":"267px"},150,
			function()
			{
				$("#"+tn+"-3b").animate({"position":"absolute","left":"670px"},150,
				function()
				{
					$("#"+tn+"-3b").animate({"position":"absolute","top":"415px"},500,
					function()
					{
						$("#"+tn+"-4").fadeIn(100);
						setTimeout(function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:580px; top:120px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							document.getElementById(tn+"-4").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-4").onclick="";
								$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},300);
								$("#"+tn+"-5").css({"visibility":"visible"});
								$("#"+tn+"-5a").css({"visibility":"visible"});
								$("#"+tn+"-5b").css({"visibility":"visible"});
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#"+tn+"-5a").click(function()
								{
									myStopFunction();
									$("#"+tn+"-5a").off("click");
									$("#"+tn+"-5").css({"visibility":"hidden"});
									$("#"+tn+"-5a").css({"visibility":"hidden"});
									$("#"+tn+"-5b").css({"visibility":"hidden"});
									$("#"+tn+"-3c").animate({"position":"absolute","top":"355px"},350);
									$("#"+tn+"-4a").animate({"position":"absolute","top":"242px"},400,
									function()
									{
										$("#"+tn+"-4a").animate({"position":"absolute","top":"151px"},300);
										$("#"+tn+"-4").animate({"position":"absolute","top":"60px"},300,
										function()
										{
											$("#"+tn+"-4a").animate({"position":"absolute","left":"101px"},1200);
											$("#"+tn+"-4").animate({"position":"absolute","left":"85px"},1200,
											function()
											{
												$("#"+tn+"-4a").animate({"position":"absolute","top":"241px"},400);
												$("#"+tn+"-4").animate({"position":"absolute","top":"150px"},400,
												function()
												{
													$("#"+tn+"-5").css({"visibility":"visible","position":"absolute","left":"420px"});
													$("#"+tn+"-5a").css({"visibility":"visible","position":"absolute","left":"472px"});
													$("#"+tn+"-5b").css({"visibility":"visible","position":"absolute","left":"484px"});
													// $("#p2-2").css({"visibility":"visible"});
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													$("#"+tn+"-5b").click(function()
													{
														myStopFunction();
														$("#"+tn+"-5b").off("click");
														$("#"+tn+"-5").css({"visibility":"hidden"});
														$("#"+tn+"-5a").css({"visibility":"hidden"});
														$("#"+tn+"-5b").css({"visibility":"hidden"});													
														
														$("#"+tn+"-4a").animate({"position":"absolute","top":"405px"},1500);
														setTimeout(function()
														{
															$("#"+tn+"-22b").animate({"position":"absolute","top":"402px"},1200,
															function()
															{
																$("#"+tn+"-4a").css({"visibility":"hidden"});
																$("#"+tn+"-4").fadeOut(100);
																// document.getElementById("nextButton").style.visibility="visible";
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:720px; top:422px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(270deg)";
																document.getElementById(tn+"-3b").onclick=function()
																{
																	myStopFunction();
																	document.getElementById(tn+"-3b").onclick="";
																	$("#"+tn+"-3b").animate({"position":"absolute","top":"257px"},500,
																	function()
																	{
																		$("#"+tn+"-3b").animate({"position":"absolute","left":"561.35px"},300,
																		function()
																		{
																			$("#"+tn+"-3b").animate({"position":"absolute","top":"285.25px"},150,
																			function()
																			{
																				document.getElementById("nextButton").style.visibility="visible";
																			});
																		});
																	});
																}
															});
														},800);
													});
												});
											});
										});
									});
								});
							}
						},100);
					});
				});
			});
		}
	}
	if(simsubscreennum==3)
	{
		tn=3;
		setTimeout(function()
		{
			// switch on weighing machine
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:105px; top:475px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			$("#"+tn+"-22").click(function()
			{
				myStopFunction();
				$("#"+tn+"-22").off("click");
				$("#"+tn+"-21").css({"visibility":"visible"});
				$("#"+tn+"-21").text("00.00");
				//place crucible on the wieghing machine
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:462.5px; top:417.5px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				$("#"+tn+"-42").click(function()
				{
					myStopFunction();
					$("#"+tn+"-42").off("click");	
					$("#"+tn+"-42").css({"visibility":"hidden"});
					$("#"+tn+"-41").css({"visibility":"visible"});
					$("#"+tn+"-41").animate({"position":"absolute","left":"117.5px","top":"210px"},1000,
					function()
					{
						$("#"+tn+"-41").animate({"position":"absolute","top":"230px"},200,
						function(){
							$("#"+tn+"-41").css({"visibility":"hidden"});
							$("#"+tn+"-42").css({"visibility":"visible","position":"absolute","left":"115px","top":"290px"});
							$("#"+tn+"-21").text(wec);
							
							//dynamically craeting paragraph
							var para1=document.createElement("p");
							// para1.style="position:absolute; left:250px; top:100px;";
							var node1=document.createTextNode("Weight of the empty crucible = "+wec+" g");
							para1.appendChild(node1);
							var element1=document.getElementById("para");
							element1.appendChild(para1);
							setTimeout(function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:170px; top:297.5px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(270deg)";
								$("#"+tn+"-42").click(function()
								{
									myStopFunction();
									$("#"+tn+"-42").off("click");
									$("#"+tn+"-21").text("0.02");
									$("#"+tn+"-42").css({"visibility":"hidden"});
									$("#"+tn+"-41").css({"visibility":"visible"});
									$("#"+tn+"-41").animate({"position":"absolute","top":"210px"},200,
									function()
									{
										$("#"+tn+"-41").animate({"position":"absolute","left":"405px","top":"342px"},1000,
										function()
										{
											$("#"+tn+"-41").css({"visibility":"hidden"});
											$("#"+tn+"-42").css({"visibility":"visible","position":"absolute","left":"410px","top":"402.5px"});
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top:475px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
											 // Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(90deg)";
											$("#"+tn+"-25").click(function()
											{
												myStopFunction();
												$("#"+tn+"-25").off("click");
												$("#"+tn+"-21").text("00.00");
												
												$("#"+tn+"-42").css({"visibility":"hidden"});
												$("#"+tn+"-1").css({"visibility":"visible"});
												
												//place petri dish on wieghing machine
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:462.5px; top:415px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(270deg)";
												$("#"+tn+"-1").click(function()
												{
													myStopFunction();
													$("#"+tn+"-1").off("click");	
													$("#"+tn+"-1").css({"visibility":"hidden"});
													$("#"+tn+"-12").css({"visibility":"visible"});	
													$("#"+tn+"-12").animate({"position":"absolute","left":"119px","top":"210px"},1000,
													function()
													{
														$("#"+tn+"-12").animate({"position":"absolute","top":"250px"},250,
														function()
														{
															$("#"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"119px","top":"305px"});
															$("#"+tn+"-12").css({"visibility":"hidden"});
															$("#"+tn+"-21").text(wep);
															
															var para2=document.createElement("p");
															var node2=document.createTextNode("Weight of the empty petridish = "+wep+" g");
															para2.appendChild(node2);
															var element2=document.getElementById("para");
															element2.appendChild(para2);
															
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top:475px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
															 // Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(90deg)";
															$("#"+tn+"-25").click(function()
															{
																myStopFunction();
																$("#"+tn+"-25").off("click");
																$("#"+tn+"-21").text("00.00");
																//weigh the filter paper
																$("#"+tn+"-31").fadeIn(500);
																$("#"+tn+"-32").css({"visibility":"visible"});
																setTimeout(function()
																{
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:475px; top:408px; height: 30px; z-index: 10;";
																	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																	// Code for IE9
																	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																	 // Standard syntax
																	document.getElementById("arrow1").style.transform = "rotate(270deg)";
																	$("#"+tn+"-32").click(function()
																	{
																		myStopFunction();
																		$("#"+tn+"-32").off("click");
																		$("#"+tn+"-32").css({"visibility":"hidden"});
																		$("#"+tn+"-33").css({"visibility":"visible"});
																		$("#"+tn+"-33").animate({"position":"absolute","left":"119px","top":"230px"},600,
																		function()
																		{
																			$("#"+tn+"-33").animate({"position":"absolute","top":"251px"},200,
																			function()
																			{
																				$("#"+tn+"-33").css({"visibility":"hidden"});
																				$("#"+tn+"-21").text(dataset[p][0]);
																				var para3=document.createElement("p");
																				var node3=document.createTextNode("Weight of ash less filter paper = "+dataset[p][0]+"g");
																				para3.appendChild(node3);
																				var element3=document.getElementById("para");
																				element3.appendChild(para3);
																				$("#"+tn+"-31").fadeOut(300);
																				setTimeout(function()
																				{
																					var dd1=((wep + dataset[p][0])).toFixed(4);
																					var para4=document.createElement("p");
																					var node4=document.createTextNode("Weight of empty petri dish + ash less filter paper = "+dd1+" g");
																					para4.appendChild(node4);
																					var element4=document.getElementById("para");
																					element4.appendChild(para4);
																					
																					myInt = setInterval(function(){ animatearrow(); }, 500);
																					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:172.5px; top:312.5px; height: 30px; z-index: 10;";
																					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																					// Code for IE9
																					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																					 // Standard syntax
																					document.getElementById("arrow1").style.transform = "rotate(270deg)";
																					$("#"+tn+"-1").click(function()
																					{
																						myStopFunction();
																						$("#"+tn+"-1").off("click");
																						$("#"+tn+"-21").text("00.00");
																						$("#"+tn+"-1").css({"visibility":"hidden"});
																						$("#"+tn+"-12").css({"visibility":"visible"});
																						$("#"+tn+"-12").animate({"position":"absolute","top":"210px"},250,
																						function()
																						{
																							$("#"+tn+"-12").animate({"position":"absolute","left":"410px","top":"356px"},600,
																							function()
																							{
																								$("#"+tn+"-12").css({"visibility":"hidden"});
																								$("#"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"410px","top":"410px"});
																								//document.getElementById("nextButton").style.visibility="visible";
																								validateAnswer(3,1,"50px","150px");
																							});
																						});
																					});
																				},300);
																			});
																		});
																	});
																},300);
															});
														});
													});
												});
											});
										});
									});
								});
							},200);
						});
					});
				});
			});					
		},500);
	}
	
	if(simsubscreennum==4) 
	{
		$("#3-1").css({"visibility":"hidden"});
		$("#3-21").css({"visibility":"hidden"});
		tn=4;
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:50px; top:330px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(tn+"-1t1").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-1t1").onclick="";
				$("#"+tn+"-1t3").css({"visibility":"visible"});
				$("#"+tn+"-1t2").css({"visibility":"hidden"});
				$("#"+tn+"-1t1").css({"visibility":"hidden"});
				document.getElementById(tn+"-1t3").style.animation="tilttopfilter 0.5s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-1t3").style.animation="tilttopfilter1 0.5s forwards";
					setTimeout(function()
					{
						$("#"+tn+"-1t3").animate({"position":"absolute","top":"227.5px"},250,
						function()
						{
							$("#"+tn+"-1t3").animate({"position":"absolute","left":"450px", "top":"337.5px"},1000,
							function()
							{
								$("#"+tn+"-1t3").css({"visibility":"hidden"});
								$("#"+tn+"-1t2").css({"visibility":"visible","position":"absolute","left":"450px", "top":"337.5px"});
								$("#"+tn+"-1t1").css({"visibility":"visible","position":"absolute","left":"450px", "top":"337.5px"});
								$("#"+tn+"-21").fadeIn(350,
								function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:450px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"-21").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"-21").onclick="";
										$("#"+tn+"-22").css({"visibility":"visible"});
										$("#"+tn+"-22").animate({"position":"absolute","left":"100px", "top":"270px"},1000,
										function()
										{
											$("#"+tn+"-22").animate({"position":"absolute", "top":"292px"},250,
											function()
											{
												$("#"+tn+"-22").css({"visibility":"hidden"});
												$("#"+tn+"-23").css({"visibility":"visible"});
												$("#"+tn+"-21").fadeOut(100,
												function()
												{
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:450px; top:400px; height: 30px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
													// Standard syntax
													document.getElementById("arrow1").style.transform = "rotate(180deg)";
													document.getElementById(tn+"-1t1").onclick=function()
													{
														myStopFunction();
														document.getElementById(tn+"-1t1").onclick="";
														$("#"+tn+"-1t3").css({"visibility":"visible"});
														$("#"+tn+"-1t2").css({"visibility":"hidden"});
														$("#"+tn+"-1t1").css({"visibility":"hidden"});
														$("#"+tn+"-1t3").animate({"position":"absolute", "left":"61.5px", "top":"237.5px"},1000,
														function()
														{
															$("#"+tn+"-1t3").animate({"position":"absolute", "left":"61.5px", "top":"257.5px"},200,
															function()
															{
																document.getElementById(tn+"-1t3").style.animation="tilttopfilter 0.5s forwards";
																setTimeout(function()
																{
																	document.getElementById(tn+"-1t3").style.animation="tilttopfilter1 0.5s forwards";
																	setTimeout(function()
																	{
																		$("#"+tn+"-1t3").css({"visibility":"hidden"});
																		$("#"+tn+"-1t2").css({"visibility":"visible","position":"absolute","left":"61.5px", "top":"257.5px"});
																		$("#"+tn+"-1t1").css({"visibility":"visible","position":"absolute","left":"61.5px", "top":"257.5px"});
																		poursample();
																	},500);
																},500);
															});
														});
													}
												});
											});
										});
									}
								});
							});
						});
					},500);
				},500);
			}
		},200);
	}
	
	if(simsubscreennum==5)
	{
		$("#4-1b").css({"visibility":"hidden"});
		$("#4-1bs").css({"visibility":"hidden"});
		$("#4-1bs2").css({"visibility":"hidden"});
		$("#4-1t1").css({"visibility":"hidden"});
		$("#4-1t2").css({"visibility":"hidden"});
		$("#4-1t3").css({"visibility":"hidden"});
		$("#4-31").css({"visibility":"hidden"});
		$("#4-35").css({"visibility":"hidden"});
		$("#4-23").css({"visibility":"hidden"});
		tn=5;
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:50px; top:330px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(tn+"-1t1").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-1t1").onclick="";
				$("#"+tn+"-1t3").css({"visibility":"visible"});
				$("#"+tn+"-1t2").css({"visibility":"hidden"});
				$("#"+tn+"-1t1").css({"visibility":"hidden"});
				document.getElementById(tn+"-1t3").style.animation="tilttopfilter 0.5s forwards";
				setTimeout(function()
				{
					document.getElementById(tn+"-1t3").style.animation="tilttopfilter1 0.5s forwards";
					setTimeout(function()
					{
						$("#"+tn+"-1t3").animate({"position":"absolute","top":"227.5px"},250,
						function()
						{
							$("#"+tn+"-1t3").animate({"position":"absolute","left":"450px", "top":"337.5px"},1000,
							function()
							{
								$("#"+tn+"-1t3").css({"visibility":"hidden"});
								$("#"+tn+"-1t2").css({"visibility":"visible","position":"absolute","left":"450px", "top":"337.5px"});
								$("#"+tn+"-1t1").css({"visibility":"visible","position":"absolute","left":"450px", "top":"337.5px"});
								$("#"+tn+"-21").fadeIn(350,
								function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:155px; top:360px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"-223").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"-223").onclick="";
										$("#"+tn+"-223").css({"visibility":"hidden"});
										$("#"+tn+"-23").css({"visibility":"hidden"});
										$("#"+tn+"-22").css({"visibility":"visible"});
										$("#"+tn+"-222").animate({"position":"absolute", "top":"326px"},245);
										$("#"+tn+"-22").animate({"position":"absolute", "top":"270px"},250,
										function()
										{
											$("#"+tn+"-222").animate({"position":"absolute","left":"280px", "top":"438.5px"},1000);
											$("#"+tn+"-22").animate({"position":"absolute","left":"275px", "top":"382.5px"},1000,
											function()
											{
												$("#"+tn+"-222").animate({"position":"absolute", "top":"454.5px"},10);
												$("#"+tn+"-23").css({"visibility":"visible","left":"270px","top":"452px"});
												$("#"+tn+"-22").css({"visibility":"hidden"});
												setTimeout(function()
												{
													$("#"+tn+"-1b").css({"visibility":"hidden"});
													$("#"+tn+"-1bs").css({"visibility":"hidden"});
													$("#"+tn+"-1bs2").css({"visibility":"hidden"});
													$("#"+tn+"-1t1").css({"visibility":"hidden"});
													$("#"+tn+"-1t2").css({"visibility":"hidden"});
													placeinoven();
												},300);
											});
										});
									}
								});
							});
						});
					},500);
				},500);
			}
		},200);
	}
	
	if(simsubscreennum==6) 
	{
		$("#5-23").css({"visibility":"hidden"});
		$("#5-24").css({"visibility":"hidden"});
		$("#5-1").css({"visibility":"hidden"});
		$("#5-11").css({"visibility":"hidden"});
		$("#5-12").css({"visibility":"hidden"});
		$("#5-13").css({"visibility":"hidden"});
		$("#5-14").css({"visibility":"hidden"});
		$("#incDoor").css({"visibility":"hidden"});
			
		tn=6;
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:440px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById(tn+"-1b").onclick=function()
			{
				myStopFunction();
				document.getElementById(tn+"-1b").onclick="";
				$("#"+tn+"-1b").css({"visibility":"hidden"});
				$("#"+tn+"-2").css({"visibility":"visible"});
				$("#"+tn+"-1bs").animate({"position":"absolute","left":"282px","top":"334px"},725);
				$("#"+tn+"-2").animate({"position":"absolute","left":"233.5px","top":"244px"},700,
				function()
				{
					document.getElementById(tn+"-2").style.animation="rotatefilter1 0.2s forwards";
					$("#"+tn+"-1bs").animate({"position":"absolute","top":"350px"},200,
					function()
					{
						$("#"+tn+"-3").css({"visibility":"visible"});
						$("#"+tn+"-3").animate({"position":"absolute","top":"426px"},800);
						$("#"+tn+"-4").animate({"position":"absolute","top":"428px"},1000);
						$("#"+tn+"-1bs").animate({"position":"absolute","top":"369px"},800,
						function()
						{
							$("#"+tn+"-1bs").css({"visibility":"hidden"});
							$("#"+tn+"-3").css({"visibility":"hidden"});
							document.getElementById(tn+"-2").style.animation="rotatefilter2 0.5s forwards";
							setTimeout(function()
							{
								$("#"+tn+"-2").css({"visibility":"hidden"});
								$("#"+tn+"-81").fadeIn(100,
								function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:385px; top:175px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									$("#"+tn+"-81").click(function()
									{
										myStopFunction();
										$("#"+tn+"-81").off("click");
										$("#"+tn+"-81").animate({"position":"absolute","top":"230px"},400,
										function()
										{
											$("#"+tn+"-7").css({"visibility":"visible"});
											$("#"+tn+"-7a").css({"visibility":"visible"});
											$("#"+tn+"-7b").css({"visibility":"visible"});
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:210px; top:245px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#"+tn+"-7a").click(function()
											{
												myStopFunction();
												$("#"+tn+"-7a").off("click");
												$("#"+tn+"-7").css({"visibility":"hidden"});
												$("#"+tn+"-7a").css({"visibility":"hidden"});
												$("#"+tn+"-7b").css({"visibility":"hidden"});
												$("#"+tn+"-5").css({"visibility":"visible"});
												$("#"+tn+"-82").css({"visibility":"visible"});
												$("#"+tn+"-83").css({"visibility":"visible"});
												$("#"+tn+"-4").animate({"position":"absolute","top":"456px"},600);
												setTimeout(function()
												{
													$("#"+tn+"-83").css({"visibility":"hidden"});
												},400);
												$("#"+tn+"-82").animate({"position":"absolute","top":"320px"},600,
												function()
												{
													$("#"+tn+"-82").animate({"position":"absolute","top":"251px"},300);
													$("#"+tn+"-81").animate({"position":"absolute","top":"160px"},300,
													function()
													{
														$("#"+tn+"-82").animate({"position":"absolute","left":"103.5px"},1200);
														$("#"+tn+"-81").animate({"position":"absolute","left":"87.5px"},1200,
														function()
														{
															$("#"+tn+"-83").css({"visibility":"visible","position":"absolute","left":"103.5px","top":"420px"});
															$("#"+tn+"-82").animate({"position":"absolute","top":"311px"},400);
															$("#"+tn+"-81").animate({"position":"absolute","top":"220px"},400,
															function()
															{
																$("#"+tn+"-7").css({"visibility":"visible"});
																$("#"+tn+"-7a").css({"visibility":"visible"});
																$("#"+tn+"-7b").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:232px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#"+tn+"-7b").click(function()
																{
																	myStopFunction();
																	$("#"+tn+"-7b").off("click");
																	$("#"+tn+"-7").css({"visibility":"hidden"});
																	$("#"+tn+"-7a").css({"visibility":"hidden"});
																	$("#"+tn+"-7b").css({"visibility":"hidden"});
																	$("#"+tn+"-82").animate({"position":"absolute","top":"420px"},600,
																	function()
																	{
																		$("#"+tn+"-82").css({"visibility":"hidden"});
																		$("#"+tn+"-83").css({"visibility":"hidden"});
																		$("#"+tn+"-212").css({"visibility":"hidden"});
																		$("#"+tn+"-4").css({"visibility":"hidden"});
																		$("#"+tn+"-81").animate({"position":"absolute","top":"160px"},300,
																		function()
																		{
																			$("#"+tn+"-81").css({"visibility":"hidden"});
																			setTimeout(function()
																			{
																				placeBeakerinOven();
																			},300);
																		});
																	});
																});	
															});
														});
													});
												});
											});
										});
									});
								});
							},800);
						});
					});
				});
			}
		},300);
	}	
	if(simsubscreennum==7) 
	{
		$("#"+tn+"-5").css({"visibility":"hidden"});
		$("#"+tn+"-1").css({"visibility":"hidden"});
		$("#"+tn+"-11").css({"visibility":"hidden"});
		$("#"+tn+"-12").css({"visibility":"hidden"});
		$("#"+tn+"-13").css({"visibility":"hidden"});
		$("#"+tn+"-14").css({"visibility":"hidden"});
		$("#incDoor6-1").css({"visibility":"hidden"});
		$("#"+tn+"-5").css({"visibility":"hidden"});
		$("#"+tn+"-1a").css({"visibility":"hidden"});
		$("#"+tn+"-11a").css({"visibility":"hidden"});
		$("#"+tn+"-12a").css({"visibility":"hidden"});
		$("#"+tn+"-13a").css({"visibility":"hidden"});
		$("#"+tn+"-14a").css({"visibility":"hidden"});
		$("#incDoor6-2").css({"visibility":"hidden"});
		$("#7-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==8) 
	{
		$("#7-2").css({"visibility":"hidden"});
		tn=8;
		takeoutpetridish();
	}
	if(simsubscreennum==9) 
	{
		tn=9;
		$("#8-41").css({"visibility":"hidden"});
		$("#8-42").css({"visibility":"hidden"});
		$("#8-43").css({"visibility":"hidden"});
		$("#8-44").css({"visibility":"hidden"});
		$("#8-45").css({"visibility":"hidden"});
		$("#8-46").css({"visibility":"hidden"});
		$("#8-47").css({"visibility":"hidden"});
		
		$("#"+tn+"-21").text("0.01");
		$("#"+tn+"-21").css({"visibility":"visible"});
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top:475px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			$("#"+tn+"-25").click(function()
			{
				myStopFunction();
				$("#"+tn+"-25").off("click");
				$("#"+tn+"-21").text("00.00");

				//place petri dish on wieghing machine
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:462.5px; top:417.5px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				$("#"+tn+"-1").click(function()
				{
					myStopFunction();
					$("#"+tn+"-1").off("click");	
					$("#"+tn+"-1").css({"visibility":"hidden"});
					$("#"+tn+"-12").css({"visibility":"visible"});	
					$("#"+tn+"-12").animate({"position":"absolute","left":"119px","top":"210px"},1000,
					function()
					{
						$("#"+tn+"-12").animate({"position":"absolute","top":"250px"},250,
						function()
						{
							var da1=(parseFloat(wep + dataset[p][1])).toFixed(4);;
							$("#"+tn+"-21").text(da1);
							$("#"+tn+"-1").css({"visibility":"visible","position":"absolute","left":"119px","top":"305px"});
							$("#"+tn+"-12").css({"visibility":"hidden"});
							
							var para5=document.createElement("p");
							var node5=document.createTextNode("Weight of the empty petridish + filter paper + solids = "+da1+" g");
							para5.appendChild(node5);
							var element5=document.getElementById("para9");
							element5.appendChild(para5);
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:173px; top:315px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
							 // Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(270deg)";
							$("#"+tn+"-1").click(function()
							{
								myStopFunction();
								$("#"+tn+"-1").off("click");	
								$("#"+tn+"-1").css({"visibility":"hidden"});
								$("#"+tn+"-12").css({"visibility":"visible"});
								$("#"+tn+"-21").text("0.01");
								$("#"+tn+"-12").animate({"position":"absolute","top":"210px"},200,
								function()
								{
									$("#"+tn+"-12").animate({"position":"absolute","left":"320px","top":"356px"},1000,
									function()
									{
										$("#"+tn+"-12").css({"visibility":"hidden"});
										$("#"+tn+"-1").css({"visibility":"visible","left":"320px","top":"410px"});
										$("#"+tn+"-31").fadeIn(200,
										function()
										{
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top:475px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(90deg)";
											$("#"+tn+"-25").click(function()
											{
												myStopFunction();
												$("#"+tn+"-25").off("click");
												$("#"+tn+"-21").text("00.00");
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:460px; top:405px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(270deg)";
												$("#"+tn+"-31").click(function()
												{
													myStopFunction();
													$("#"+tn+"-31").off("click");	
													$("#"+tn+"-31").css({"visibility":"hidden"});
													$("#"+tn+"-32").css({"visibility":"visible"});	
													$("#"+tn+"-32").animate({"position":"absolute","left":"115px","top":"210px"},1000,
													function()
													{
														$("#"+tn+"-32").animate({"position":"absolute","top":"230px"},200,
														function()
														{
															$("#"+tn+"-32").css({"visibility":"hidden"});
															$("#"+tn+"-31").css({"visibility":"visible","left":"115px","top":"280px"});
															
															var da2=(parseFloat(wec + dataset[p][2])).toFixed(4);
															$("#"+tn+"-21").text(da2);
															
															var para6=document.createElement("p");
															var node6=document.createTextNode("Weight of the empty crucible + fixed solids = "+da2+" g");
															para6.appendChild(node6);
															var element6=document.getElementById("para9");
															element6.appendChild(para6);
							
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:175px; top:295px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
															 // Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															$("#"+tn+"-31").click(function()
															{
																myStopFunction();
																$("#"+tn+"-31").off("click");	
																$("#"+tn+"-31").css({"visibility":"hidden"});
																$("#"+tn+"-32").css({"visibility":"visible"});
																$("#"+tn+"-21").text("00.00");
																$("#"+tn+"-32").animate({"position":"absolute","top":"210px"},200,
																function()
																{
																	$("#"+tn+"-32").animate({"position":"absolute","left":"400px","top":"332px"},1000,
																	function()
																	{
																		$("#"+tn+"-31").css({"visibility":"visible","left":"400px","top":"390px"});
																		$("#"+tn+"-32").css({"visibility":"hidden"});
																		document.getElementById("nextButton").style.visibility="visible";
																	});
																});
															});
														});
													});  
												});
											});
										});
									});
								});
							});
							
						});
					});	
				});
			});
		},500);
	}
	
	if(simsubscreennum==10) 
	{
		$("#9-1").css({"visibility":"hidden"});
		$("#9-21").css({"visibility":"hidden"});
		$("#9-31").css({"visibility":"hidden"});


		document.getElementById("p10-2").innerHTML="Weight of empty petridish + filter paper (W<sub>1</sub>) = "+data1+" g";
		document.getElementById("p10-3").innerHTML="Weight of empty petridish + filter paper + solids (W<sub>2</sub>) ="+data2+" g";
		
		document.getElementById("c1").onclick=function()
		{
			if(!document.getElementById("in1").value  || !document.getElementById("in1").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n1 = document.getElementById("in1").value;
				
				if(Math.round(n1) == Math.round(tss))
				{
					document.getElementById("c1").style.visibility="hidden";
					document.getElementById("r1").style.visibility="visible";
					document.getElementById("res1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="hidden";
					document.getElementById("in1").style="border:none;  background-color:white; color:black; width:30px; font-size:15px;"
					document.getElementById("in1").disabled="true";
					setTimeout(function()
					{
						calcTDS();
					},300);
				}
				else
				{
					document.getElementById("r1").style.visibility="hidden";
					document.getElementById("w1").style.visibility="visible";
					document.getElementById("res1").style.visibility="visible";
				}	
			}
		}
		document.getElementById("res1").onclick=function()
		{
			document.getElementById("c1").style.visibility="hidden";
			document.getElementById("r1").style.visibility="hidden";
			document.getElementById("res1").style.visibility="hidden";
			document.getElementById("w1").style.visibility="hidden";
			document.getElementById("in1").value=tss;
			document.getElementById("in1").style="border:none;  background-color:white; color:black; width:30px;  font-size:15px;"
			document.getElementById("in1").disabled="true";
			setTimeout(function()
			{
				calcTDS();
			},300);
		}
	}
	
	if(simsubscreennum==11) 
	{
		$("#pp2").css({"visibility":"hidden"});
		$("#p10-5").css({"visibility":"hidden"});
		$("#p10-6").css({"visibility":"hidden"});
		$("#p10-7").css({"visibility":"hidden"});
		$("#in2").css({"visibility":"hidden"});
		$("#c2").css({"visibility":"hidden"});
		$("#w1").css({"visibility":"hidden"});
		$("#w2").css({"visibility":"hidden"});
		$("#r2").css({"visibility":"hidden"});
		$("#r1").css({"visibility":"hidden"});
		$("#p102").css({"visibility":"hidden"});
		
		document.getElementById("p11-1").innerHTML="Total suspended solids, (TSS) = "+tss+" mg/l";
		document.getElementById("p11-2").innerHTML="Total dissolved solids, (TDS) = "+tds+" mg/l";

		document.getElementById("c11").onclick=function()
		{
			if(!document.getElementById("in11").value  || !document.getElementById("in11").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				n11 = document.getElementById("in11").value;
				
				if(Math.round(n11) == Math.round(ts))
				{
					document.getElementById("c11").style.visibility="hidden";
					document.getElementById("r11").style.visibility="visible";
					document.getElementById("res11").style.visibility="hidden";
					document.getElementById("w11").style.visibility="hidden";
					document.getElementById("in11").style="border:none;  background-color:white; color:black; width:35px; font-size:15px;"
					document.getElementById("in11").disabled="true";
					document.getElementById("nextButton").style.visibility="visible";
				}
				else
				{
					document.getElementById("r11").style.visibility="hidden";
					document.getElementById("w11").style.visibility="visible";
					document.getElementById("res11").style.visibility="visible";
				}	
			}
		}
		document.getElementById("res11").onclick=function()
		{
			document.getElementById("c11").style.visibility="hidden";
			document.getElementById("r11").style.visibility="hidden";
			document.getElementById("res11").style.visibility="hidden";
			document.getElementById("w11").style.visibility="hidden";
			document.getElementById("in11").value=ts;
			document.getElementById("in11").style="border:none;  background-color:white; color:black; width:35px;  font-size:15px;"
			document.getElementById("in11").disabled="true";
			document.getElementById("nextButton").style.visibility="visible";
		}
	}
	if(simsubscreennum==12) 
	{
		document.getElementById("r11").style.visibility="hidden";
		document.getElementById("w11").style.visibility="hidden";
		$("#12-1").fadeIn(2000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==13) 
	{
		tn=13;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:105px; top:415px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		$("#"+tn+"-1").click(function()
		{
			myStopFunction();
			$("#"+tn+"-1").off("click");
			$("#"+tn+"-1").css({"visibility":"hidden"});
			$("#"+tn+"-2").css({"visibility":"visible"});
			$("#"+tn+"-3").css({"visibility":"visible"});
			$("#"+tn+"-2").animate({"position":"absolute","top":"330px"},200,
			function()
			{
				$("#"+tn+"-2").animate({"position":"absolute","left":"410px","top":"320px"},1000,
				function()
				{
					$("#"+tn+"-2").animate({"position":"absolute","left":"410px","top":"343px"},200,
					function()
					{
						$("#"+tn+"-2").css({"visibility":"hidden"});
						$("#"+tn+"-3").css({"visibility":"hidden"});
						$("#"+tn+"-5").css({"visibility":"visible"});
						$("#"+tn+"-51").css({"visibility":"visible"});
						$("#"+tn+"-52").css({"visibility":"visible"});
						$("#"+tn+"-53").css({"visibility":"visible"});
						$("#"+tn+"-11").css({"visibility":"visible"});
						$("#incDoor12-1").css({"visibility":"visible"});
						setTimeout(function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:217.5px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(270deg)";
							document.getElementById(tn+"-11").onclick=function()
							{
								myStopFunction();
								document.getElementById(tn+"-11").onclick="";
								document.getElementById(tn+"-11").style.transformOrigin="95% 50%";
								document.getElementById(tn+"-11").style.animation="rotateKnotch 0.5s forwards";
								$('.door12-1').toggleClass('doorOpen12');
								setTimeout(function()
								{
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:465px; top:410px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
											// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
											// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"-4").onclick=function()
									{
										myStopFunction();
										document.getElementById(tn+"-4").onclick="";
										$("#"+tn+"-4").css({"visibility":"hidden"});
										$("#"+tn+"-7").css({"visibility":"visible"});
										$("#"+tn+"-7").animate({"position":"absolute","left":"100px","top":"100px"},1000,
										function()	
										{
											$("#"+tn+"-7").animate({"position":"absolute","left":"100px","top":"125px"},200,
											function()
											{
												$("#"+tn+"-7").css({"visibility":"hidden"});
												$("#"+tn+"-4").css({"width":"25px"});
												
												$("#"+tn+"-4").css({"visibility":"visible","left":"116px","top":"210px"});
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:270px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
														// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
														// Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												document.getElementById(tn+"-11").onclick=function()
												{
													myStopFunction();
													document.getElementById(tn+"-11").onclick="";
													document.getElementById(tn+"-11").style.transformOrigin="95% 50%";
													document.getElementById(tn+"-11").style.animation="rotateKnotch2 0.5s forwards";
													$('.door12-1').toggleClass('doorOpen12');
													setTimeout(function()
													{
														document.getElementById(tn+"-9c").style.visibility="visible";
														document.getElementById(tn+"-9n").style.visibility="visible";
														document.getElementById(tn+"-9n").style.transformOrigin="80%  100%";
														rotateAnimation(tn+"-9n",7.5);
														setTimeout(function()
														{
															document.getElementById("p13-1").style.visibility="visible";
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:217.5px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																	// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																	// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(270deg)";
															document.getElementById(tn+"-11").onclick=function()
															{
																myStopFunction();
																document.getElementById("p13-1").style.visibility="hidden";
																document.getElementById(tn+"-9c").style.visibility="hidden";
																document.getElementById(tn+"-9n").style.visibility="hidden";
																document.getElementById(tn+"-11").onclick="";
																document.getElementById(tn+"-11").style.transformOrigin="95% 50%";
																document.getElementById(tn+"-11").style.animation="rotateKnotch 0.5s forwards";
																$('.door12-1').toggleClass('doorOpen12');
																setTimeout(function()
																{
																	myInt = setInterval(function(){ animatearrow(); }, 500);
																	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:160px; top:222.5px; height: 30px; z-index: 10;";
																	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																			// Code for IE9
																	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																			// Standard syntax
																	document.getElementById("arrow1").style.transform = "rotate(270deg)";
																	document.getElementById(tn+"-4").onclick=function()
																	{
																		myStopFunction();
																		document.getElementById(tn+"-4").onclick="";
																		$("#"+tn+"-4").css({"visibility":"hidden"});
																		$("#"+tn+"-8").css({"visibility":"visible"});
																		$("#"+tn+"-81").css({"visibility":"visible"});
																		$("#"+tn+"-61").css({"visibility":"visible"});
																		$("#"+tn+"-62").css({"visibility":"visible"});
																		$("#"+tn+"-63").css({"visibility":"visible"});
																		$("#"+tn+"-8").animate({"position":"absolute","left":"200px","top":"190px"},700);	
																	  $("#"+tn+"-81").animate({"position":"absolute","left":"210px","top":"291.5px"},700,
																		function()
																		{
																			document.getElementById(tn+"-11").style.transformOrigin="95% 50%";
																			document.getElementById(tn+"-11").style.animation="rotateKnotch2 0.5s forwards";
																			$('.door12-1').toggleClass('doorOpen12');
																		  $("#"+tn+"-8").animate({"position":"absolute","left":"290px"},300);	
																		  $("#"+tn+"-81").animate({"position":"absolute","left":"300px"},300,
																		  function()
																		  {
																			$("#"+tn+"-8").animate({"position":"absolute","top":"263px"},300);	
																			$("#"+tn+"-81").animate({"position":"absolute","top":"364.5px"},300,
																			function()
																			{
																				$("#"+tn+"-8").css({"visibility":"hidden"});
																				$("#"+tn+"-81").css({"visibility":"hidden"});
																				$("#"+tn+"-82").css({"visibility":"visible"});
																				$("#"+tn+"-12").css({"visibility":"visible"});
																				$("#"+tn+"-5").css({"visibility":"hidden"});
																				$("#"+tn+"-51").css({"visibility":"hidden"});
																				$("#"+tn+"-52").css({"visibility":"hidden"});
																				$("#"+tn+"-53").css({"visibility":"hidden"});
																				$("#"+tn+"-11").css({"visibility":"hidden"});
																				$("#incDoor12-1").css({"visibility":"hidden"});
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:215px; top:420px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																						// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																						// Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(270deg)";
																				document.getElementById(tn+"-61").onclick=function()
																				{
																					myStopFunction();
																					document.getElementById(tn+"-61").onclick="";
																					$("#"+tn+"-61").animate({"position":"absolute","top":"280.5px"},500,
																					function()
																					{
																						$("#"+tn+"-61").animate({"position":"absolute","left":"250.35px","top":"290.5px"},300,
																						function()
																						{
																							validateAnswer(2,0,"350px","150px");
																						});
																					});
																				}
																			});
																		  });
																		});	
																	}
																},600);
															}
														},6000);
													},600);
												}
											});
										});
									}
								},200);	 
							}
						},200);
					});
				});
			});
		});
	}
	
	if(simsubscreennum==14)
	{
		$("#13-61").css({"visibility":"hidden"});
		$("#13-62").css({"visibility":"hidden"});
		$("#13-63").css({"visibility":"hidden"});
		$("#13-82").css({"visibility":"hidden"});
		tn=14;
		setTimeout(function()
		{
			// switch on weighing machine
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:105px; top:475px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(90deg)";
			$("#"+tn+"-22").click(function()
			{
				myStopFunction();
				$("#"+tn+"-22").off("click");
				$("#"+tn+"-21").css({"visibility":"visible"});
				$("#"+tn+"-21").text("00.00");
				//place crucible on the wieghing machine
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:462.5px; top:417.5px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				 // Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				$("#"+tn+"-42").click(function()
				{
					myStopFunction();
					$("#"+tn+"-42").off("click");	
					$("#"+tn+"-42").css({"visibility":"hidden"});
					$("#"+tn+"-41").css({"visibility":"visible"});
					$("#"+tn+"-41").animate({"position":"absolute","left":"117.5px","top":"210px"},1000,
					function()
					{
						$("#"+tn+"-41").animate({"position":"absolute","top":"230px"},200,
						function(){
							$("#"+tn+"-41").css({"visibility":"hidden"});
							$("#"+tn+"-42").css({"visibility":"visible","position":"absolute","left":"115px","top":"290px"});

							$("#"+tn+"-21").text(data5);
							
							//dynamically craeting paragraph
							var para14=document.createElement("p");
							// para1.style="position:absolute; left:250px; top:100px;";
							var node14=document.createTextNode("Weight of the muffle pot + fixed solids = "+data5+" g");//change the value
							para14.appendChild(node14);
							var element14=document.getElementById("para14");
							element14.appendChild(para14);
							setTimeout(function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:170px; top:297.5px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(270deg)";
								$("#"+tn+"-42").click(function()
								{
									myStopFunction();
									$("#"+tn+"-42").off("click");
									$("#"+tn+"-21").text("0.02");
									$("#"+tn+"-42").css({"visibility":"hidden"});
									$("#"+tn+"-41").css({"visibility":"visible"});
									$("#"+tn+"-41").animate({"position":"absolute","top":"210px"},200,
									function()
									{
										$("#"+tn+"-41").animate({"position":"absolute","left":"405px","top":"342px"},1000,
										function()
										{
											$("#"+tn+"-41").css({"visibility":"hidden"});
											$("#"+tn+"-42").css({"visibility":"visible","position":"absolute","left":"410px","top":"402.5px"});
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:240px; top:475px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(90deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(90deg)"; 
											 // Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(90deg)";
											$("#"+tn+"-25").click(function()
											{
												myStopFunction();
												$("#"+tn+"-25").off("click");
												$("#"+tn+"-21").text("00.00");
												
												$("#"+tn+"-42").css({"visibility":"hidden"});
												$("#"+tn+"-1").css({"visibility":"visible"});
												//document.getElementById("nextButton").style.visibility="visible";
												validateAnswer(1,0,"350px","300px");
											});
										});
									});
								});
							},200);
						});
					});
				});
			});					
		},500);
	}
	
	if(simsubscreennum==15)
	{
		document.getElementById("14-21").style.visibility="hidden";
		document.getElementById("p15-2").innerHTML="Weight of empty muffle pot (W<sub>5</sub>) = "+wec+" g";
		document.getElementById("p15-3").innerHTML="Weight of empty muffle pot + solids (W<sub>6</sub>) ="+data5+" g";
		
		document.getElementById("15c1").onclick=function()
		{
			if(!document.getElementById("15in1").value  || !document.getElementById("15in1").value!=" ")
			{
				alert("Enter the value to proceed ");
			}
			else
			{
				nn1 = document.getElementById("15in1").value;
				
				if(Math.round(nn1) == Math.round(fss))
				{
					document.getElementById("15c1").style.visibility="hidden";
					document.getElementById("15r1").style.visibility="visible";
					document.getElementById("15res1").style.visibility="hidden";
					document.getElementById("15w1").style.visibility="hidden";
					document.getElementById("15in1").style="border:none;  background-color:white; color:black; width:30px; font-size:15px;"
					document.getElementById("15in1").disabled="true";
					setTimeout(function()
					{
						calcVSS();
					},300);
				}
				else
				{
					document.getElementById("15r1").style.visibility="hidden";
					document.getElementById("15w1").style.visibility="visible";
					document.getElementById("15res1").style.visibility="visible";
				}	
			}
		}
		document.getElementById("15res1").onclick=function()
		{
			document.getElementById("15c1").style.visibility="hidden";
			document.getElementById("15r1").style.visibility="hidden";
			document.getElementById("15res1").style.visibility="hidden";
			document.getElementById("15w1").style.visibility="hidden";
			document.getElementById("15in1").value=fss;
			document.getElementById("15in1").style="border:none;  background-color:white; color:black; width:30px;  font-size:15px;"
			document.getElementById("15in1").disabled="true";
			setTimeout(function()
			{
				calcVSS();
			},300);
		}
	}
	if(simsubscreennum==16)
	{
		document.getElementById("15pp2").style.visibility="hidden";
		document.getElementById("p152").style.visibility="hidden";
		document.getElementById("15r1").style.visibility="hidden";
		document.getElementById("15w1").style.visibility="hidden";
		document.getElementById("15res1").style.visibility="hidden";
		document.getElementById("15c1").style.visibility="hidden";
		document.getElementById("15c2").style.visibility="hidden";
		document.getElementById("15r1").style.visibility="hidden";
		document.getElementById("15r2").style.visibility="hidden";
		document.getElementById("15res2").style.visibility="hidden";
		document.getElementById("15w1").style.visibility="hidden";
		document.getElementById("15w2").style.visibility="hidden";
		document.getElementById("15in1").style.visibility="hidden";
		document.getElementById("15in2").style.visibility="hidden";
		document.getElementById("p15-5").style.visibility="hidden";
		document.getElementById("p15-7").style.visibility="hidden";
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==4)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is &lt; 500mg/l";
	}

	setTimeout(function()
	{
		document.getElementById("inference").style.visibility="hidden";
		if(ts<=500)
		{
			document.getElementById("infAns").innerHTML="The acceptable range of Total Dissolved Solids in drinking water is less than 500mg/l. The water sample given has "+ts+"mg/l of Total Dissolved Solids, so it is in the BIS standards range for drinking water.";
		}
		else 
		{
			document.getElementById("infAns").innerHTML="The acceptable range of Total Dissolved Solids in drinking water is less than 500mg/l. The water sample given has "+ts+"mg/l of Total Dissolved Solids, so it is not in the BIS standards range for drinking water.";
		}
		document.getElementById("ans").style.visibility="hidden";
		$("#infAns").fadeIn(750);
	},1000);
}

function poursample()
{
	$("#"+tn+"-30").css({"visibility":"visible"});
	$("#"+tn+"-31").css({"visibility":"visible"});
	$("#p"+tn+"-1").fadeIn(300);

	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:255px; top:375px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-30").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-30").onclick="";
		$("#p"+tn+"-1").fadeOut(100);
		$("#"+tn+"-32").css({"visibility":"visible"});
		$("#"+tn+"-34").css({"visibility":"visible"});
		$("#"+tn+"-33").css({"visibility":"visible"});
		setTimeout(function()
		{
			$("#"+tn+"-33").animate({"position":"absolute","left":"44.5px"},500);
			$("#"+tn+"-1b").animate({"position":"absolute","left":"72px"},500);
			$("#"+tn+"-1t2").animate({"position":"absolute","left":"83.5px"},500);
			$("#"+tn+"-1t1").animate({"position":"absolute","left":"83.5px"},500);
			$("#"+tn+"-23").animate({"position":"absolute","left":"111px"},500);
			$("#"+tn+"-32").animate({"position":"absolute","left":"209.5px"},500,
			function()
			{
				$("#"+tn+"-32").css({"visibility":"hidden"});
				$("#"+tn+"-33").css({"visibility":"hidden"});
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:575px; top:222px; height: 35px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax 
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				document.getElementById(tn+"-34").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-34").onclick="";
					$("#"+tn+"-35").css({"visibility":"visible"});
					setTimeout(function()
					{
						$("#"+tn+"-421").css({"visibility":"visible"});
						$("#"+tn+"-42").css({"visibility":"visible"});
						$("#"+tn+"-41").css({"visibility":"visible"});	
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:185px; top:215px; height: 35px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
						// Standard syntax 
						document.getElementById("arrow1").style.transform = "rotate(180deg)";
						document.getElementById(tn+"-421").onclick=function()
						{
							myStopFunction();
							document.getElementById(tn+"-421").onclick="";
							document.getElementById(tn+"-42").style.animation="rotateBeaker1 0.5s forwards";
							document.getElementById(tn+"-41").style.animation="rotateBeaker1 0.5s forwards";
							setTimeout(function()
							{
								$("#"+tn+"-41").css({"visibility":"hidden"});
								$("#"+tn+"-43").css({"visibility":"visible"});
								$("#"+tn+"-44").css({"visibility":"visible"});
								$("#"+tn+"-5").css({"visibility":"visible"});
								$("#"+tn+"-51").css({"visibility":"visible"});
								$("#"+tn+"-1bs").css({"visibility":"visible"});
								$("#"+tn+"-1bs2").css({"visibility":"visible"});
								setTimeout(function()
								{
									$("#"+tn+"-432").css({"visibility":"visible"});
									$("#"+tn+"-432").animate({"position":"absolute","top":"340px"},1000);
								},150);
								$("#"+tn+"-43").animate({"position":"absolute","top":"254px"},400,
								function()
								{
									$("#"+tn+"-5").animate({"position":"absolute","top":"327px"},1000,
									function()
									{
										document.getElementById(tn+"-42").style.animation="rotateBeaker2 0.5s forwards";
										setTimeout(function()
										{
											$("#"+tn+"-432").css({"position":"absolute","left":"145px"});
											$("#"+tn+"-5").animate({"position":"absolute","top":"336px"},1700);
											$("#"+tn+"-432").animate({"position":"absolute","top":"480px"},1700);
											setTimeout(function()
											{
												$("#"+tn+"-1bs").animate({"position":"absolute","top":"440px"},1700,
												function()
												{
													$("#"+tn+"-5").css({"visibility":"hidden"});
													$("#"+tn+"-51").css({"visibility":"hidden"});
													$("#"+tn+"-432").css({"visibility":"hidden"});
													document.getElementById(tn+"-42").style.visibility="hidden";
													myInt = setInterval(function(){ animatearrow(); }, 500);
													document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:575px; top:222px; height: 35px; z-index: 10;";
													document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
													// Code for IE9
													document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
													// Standard syntax 
													document.getElementById("arrow1").style.transform = "rotate(270deg)";
													document.getElementById(tn+"-34").onclick=function()
													{
														myStopFunction();
														document.getElementById(tn+"-34").onclick="";
														$("#"+tn+"-35").css({"visibility":"hidden"});
														disconnectpump();
													}
												});
											},300);
										},600);
									});
									// $("#"+tn+"-1bs").animate({"position":"absolute","top":"440px"},1700,
									// function()
									// {
										// 
										// setTimeout(function()
										// {
											// document.getElementById(tn+"-42").style.visibility="hidden";
											// myInt = setInterval(function(){ animatearrow(); }, 500);
											// document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:575px; top:222px; height: 35px; z-index: 10;";
											// document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
											// // Code for IE9
											// document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
											// // Standard syntax 
											// document.getElementById("arrow1").style.transform = "rotate(270deg)";
											// document.getElementById(tn+"-34").onclick=function()
											// {
												// myStopFunction();
												// document.getElementById(tn+"-34").onclick="";
												// $("#"+tn+"-35").css({"visibility":"hidden"});
												// disconnectpump();
											// }
										// },750);
									// });
								});
							},500);
						}
					},400);
				}
			});
		},200);
	}
}

function disconnectpump()
{
	$("#"+tn+"-432").css({"visibility":"hidden"});
	$("#"+tn+"-30").css({"visibility":"visible"});
	$("#"+tn+"-31").css({"visibility":"visible"});
	$("#p"+tn+"-1").text("Disconnect the filter from vacuum pump");
	$("#p"+tn+"-1").fadeIn(300);

	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:255px; top:375px; height: 35px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(tn+"-30").onclick=function()
	{
		myStopFunction();
		document.getElementById(tn+"-30").onclick="";
		$("#p"+tn+"-1").fadeOut(100);
		$("#"+tn+"-32").css({"visibility":"visible"});
		$("#"+tn+"-34").css({"visibility":"visible"});
		$("#"+tn+"-33").css({"visibility":"visible"});
		setTimeout(function()
		{
			$("#"+tn+"-33").animate({"position":"absolute","left":"22.5px"},500);
			$("#"+tn+"-1b").animate({"position":"absolute","left":"50px"},500);
			$("#"+tn+"-1t2").animate({"position":"absolute","left":"61.5px"},500);
			$("#"+tn+"-1t1").animate({"position":"absolute","left":"61.5px"},500);
			$("#"+tn+"-23").animate({"position":"absolute","left":"95px"},500);
			$("#"+tn+"-32").animate({"position":"absolute","left":"212.5px"},500);
			$("#"+tn+"-1bs").animate({"position":"absolute","left":"72.5px"},500);
			$("#"+tn+"-1bs2").animate({"position":"absolute","left":"72.5px"},500,
			function()
			{
				setTimeout(function()
				{
					$("#"+tn+"-32").css({"visibility":"hidden"});
					$("#"+tn+"-34").css({"visibility":"hidden"});
					$("#"+tn+"-33").css({"visibility":"hidden"});
					document.getElementById("nextButton").style.visibility="visible";
				},200);
			});
		},300);
	}
}

//step3
function placeinoven()
{
	$("#"+tn+"-1").css({"visibility":"visible"});
	$("#"+tn+"-11").css({"visibility":"visible"});
	$("#"+tn+"-12").css({"visibility":"visible"});
	$("#"+tn+"-13").css({"visibility":"visible"});
	$("#"+tn+"-14").css({"visibility":"visible"});
	$("#incDoor").css({"visibility":"visible"});
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-11").onclick=function()
		{
			myStopFunction();
			 $('.door').toggleClass('doorOpen');
			document.getElementById(tn+"-11").onclick="";	
			setTimeout(function(){
				document.getElementById(tn+"-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:330px; top:450px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(270deg)";
				document.getElementById(tn+"-21").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-21").onclick="";
					$("#"+tn+"-212").css({"visibility":"visible"});
					document.getElementById(tn+"-21").style.visibility="hidden";
					document.getElementById(tn+"-222").style.visibility="hidden";
					document.getElementById(tn+"-23").style.visibility="hidden";
					$("#"+tn+"-212").animate({"position":"absolute","left":"100px","top":"160px"},700,
					function()
					{
						$("#"+tn+"-212").animate({"position":"absolute","top":"165px"},50,
						function()
						{
							// document.getElementById(tn+"-21").style="width:45px";
							// document.getElementById(tn+"-23").style="width:45px";
							// document.getElementById(tn+"-222").style="width:33px";
							document.getElementById(tn+"-212").style.visibility="hidden";
							// $("#"+tn+"-222").css({"visibility":"visible","position":"absolute","left":"104px","top":"237px"});
							// $("#"+tn+"-21").css({"visibility":"visible","position":"absolute","left":"100px","top":"220px"});
							// $("#"+tn+"-23").css({"visibility":"visible","position":"absolute","left":"100px","top":"234.5px"});
							$("#"+tn+"-24").css({"visibility":"visible"});		
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(0deg)";
							//$('.door').click(function()
							document.getElementById("incDoor").onclick=function()
							{
								myStopFunction();
								document.getElementById("incDoor").onclick="";	
								$('.door').toggleClass('doorOpen');
								setTimeout(function()
								{
									document.getElementById(tn+"-11").style.visibility="visible";
									
									var temp=100;
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:215px; top:147px; height: 25px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(270deg)";
									document.getElementById(tn+"-13").onclick=function()
									{
										if(temp<106)
										{
											temp++;
											document.getElementById("5-12").innerHTML="&nbsp;"+temp;
										}
										if(temp>=105)
										{
											myStopFunction();
											document.getElementById(tn+"-13").onclick="";
											document.getElementById("nextButton").style.visibility="visible";
										}
									}
								},1150);
							}
							
						});
					});
				}
			},1500);
		}
	},300);
}

function placeBeakerinOven()
{
		$("#"+tn+"-212").css({"visibility":"hidden"});
		$("#"+tn+"-4").css({"visibility":"hidden"});
		$("#"+tn+"-5").css({"visibility":"visible"});
		$("#"+tn+"-1").css({"visibility":"visible"});
		$("#"+tn+"-11").css({"visibility":"visible"});
		$("#"+tn+"-12").css({"visibility":"visible"});
		$("#"+tn+"-13").css({"visibility":"visible"});
		$("#"+tn+"-14").css({"visibility":"visible"});
		$("#incDoor6-1").css({"visibility":"visible"});
	
		$("#"+tn+"-11").css({"visibility":"visible"});
		$("#"+tn+"-12a").css({"visibility":"visible"});
		$("#"+tn+"-14a").css({"visibility":"visible"});
		document.getElementById("6-pd").style.visibility="visible";
	setTimeout(function()
	{	
		setTimeout(function()
		{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:100px; top:235px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-11").onclick=function()
		{
			myStopFunction();
			 $('.door6-2').toggleClass('doorOpen');
			document.getElementById(tn+"-11").onclick="";	
			setTimeout(function(){
				document.getElementById(tn+"-11").style.visibility="hidden";
			},350);
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:85px; top:472px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(180deg)";
				document.getElementById(tn+"-5").onclick=function()
				{
					myStopFunction();
					document.getElementById(tn+"-5").onclick="";
					$("#"+tn+"-5").css({"visibility":"hidden"});
					$("#"+tn+"-6").css({"visibility":"visible"});
					$("#"+tn+"-6").animate({"position":"absolute","left":"102.5px","top":"190px"},800,
					function()
					{
						$("#"+tn+"-6").animate({"position":"absolute","top":"200px"},100,
						function()
						{
							document.getElementById(tn+"-6").style.visibility="hidden";
							$("#"+tn+"-5").css({"position":"absolute","left":"95px","top":"275px"});
							$("#"+tn+"-5").css({"visibility":"visible"});							
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(0deg)";
							document.getElementById("incDoor6-1").onclick=function()
							{
								myStopFunction();
								document.getElementById("incDoor6-1").onclick="";	
								$('.door6-2').toggleClass('doorOpen');
								setTimeout(function()
								{
									document.getElementById("6-pd").style.visibility="hidden";
									document.getElementById(tn+"-11").style.visibility="visible";
									validateAnswer(0,2,"435px","150px");
								},1150);
							}
							
						});
					});
				}
			},1500);
		}
	},300);

	},500);
}

function takeoutpetridish()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:90px; top:235px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-11").onclick=function()
		{
			myStopFunction();
			 $('.door8-1').toggleClass('doorOpen');
			document.getElementById(tn+"-11").onclick="";	
			setTimeout(function(){
				document.getElementById(tn+"-11").style.visibility="hidden";
				setTimeout(function()
				{
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:115px; top:262px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					document.getElementById(tn+"-21").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"-21").onclick="";
						document.getElementById(tn+"-21").style.visibility="hidden";
						document.getElementById(tn+"-22").style.visibility="visible";
						$("#"+tn+"-22").animate({"position":"absolute","top":"135px"},200,
						function()
						{
							$("#"+tn+"-22").animate({"position":"absolute","top":"353.5px"},900,
							function()
							{
								document.getElementById(tn+"-22").style.visibility="hidden";
								$("#"+tn+"-21").css({"visibility":"visible","position":"absolute","top":"435px"});
								takeoutcrucible();		
							});
						});
					}
				},1500);
			},350);
		}
	},500);
}

function takeoutcrucible()
{
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:100px; top:320px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
				// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
				// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById(tn+"-31").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-31").onclick="";
			document.getElementById(tn+"-31").style.visibility="hidden";
			document.getElementById(tn+"-32").style.visibility="visible";
			setTimeout(function()
			{
				$("#"+tn+"-32").animate({"position":"absolute","top":"265px"},100,
				function()
				{
					$("#"+tn+"-32").animate({"position":"absolute","left":"300px","top":"403.5px"},1000,
					function()
					{
						document.getElementById(tn+"-32").style.visibility="hidden";
						$("#"+tn+"-31").css({"visibility":"visible","position":"absolute","left":"325px","top":"437.5px"});
						// document.getElementById(tn+"-23").style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:255px; height: 35px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(0deg)";
						//$('.door').click(function()
						document.getElementById("incDoor8-1").onclick=function()
						{
							myStopFunction();
							document.getElementById("incDoor8-1").onclick="";	
							$('.door8-1').toggleClass('doorOpen');
							setTimeout(function()
							{
								document.getElementById(tn+"-11").style.visibility="visible";
								setTimeout(function()
								{
									$("#"+tn+"-1").css({"visibility":"hidden"});
									$("#"+tn+"-11").css({"visibility":"hidden"});
									$("#"+tn+"-12").css({"visibility":"hidden"});
									$("#"+tn+"-13").css({"visibility":"hidden"});
									$("#"+tn+"-14").css({"visibility":"hidden"});
									$("#incDoor8-1").css({"visibility":"hidden"});
									$("#"+tn+"-1a").css({"visibility":"hidden"});
									$("#"+tn+"-11a").css({"visibility":"hidden"});
									$("#"+tn+"-12a").css({"visibility":"hidden"});
									$("#"+tn+"-13a").css({"visibility":"hidden"});
									$("#"+tn+"-14a").css({"visibility":"hidden"});
									$("#incDoor8-2").css({"visibility":"hidden"});
							
									$("#"+tn+"-4a").css({"visibility":"visible"});
									setTimeout(function()
									{
										placeinDessicator();
									},200);
								},500);
							},1150);
						}
					});
				});
			},600);
		}
	},500);
}

function placeinDessicator()
{
	$("#"+tn+"-31").css({"visibility":"hidden"});
	$("#"+tn+"-41").css({"visibility":"visible"});
	$("#"+tn+"-42").css({"visibility":"visible"});
	$("#"+tn+"-43").css({"visibility":"visible"});
	$("#"+tn+"-46").css({"visibility":"visible"});
	$("#"+tn+"-21").css({"left":"30px"});

	$("#p"+tn+"-1").fadeIn(100);
    document.getElementById("b"+tn+"-1").onclick=function()
	{
		document.getElementById("b"+tn+"-1").onclick="";
		$("#p"+tn+"-1").css({"visibility":"hidden"});
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:357.5px; top:295px; height: 35px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		// Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		document.getElementById(tn+"-41").onclick=function()
		{
			myStopFunction();
			document.getElementById(tn+"-41").onclick="";
			$("#"+tn+"-41").animate({"position":"absolute","top":"257.5px"},200,
			function()
			{
				$("#"+tn+"-41").animate({"position":"absolute","left":"100px","top":"415px"},1100,
				function()
				{
					console.log("jjkk");
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:80px; top:440px; height: 35px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById(tn+"-21").onclick=function()
					{
						myStopFunction();
						document.getElementById(tn+"-21").onclick="";
						document.getElementById(tn+"-4a").style.visibility="hidden";//division blank
						document.getElementById(tn+"-21").style.visibility="hidden";
						$("#"+tn+"-22").css({"visibility":"visible","position":"absolute","left":"30px"});
						$("#"+tn+"-22").animate({"position":"absolute","left":"272.5px","top":"200px"},700,
						function()
						{
							$("#"+tn+"-22").animate({"position":"absolute","top":"305px"},700,
							function()
							{
								$("#"+tn+"-22").css({"visibility":"hidden"});
								$("#"+tn+"-44").css({"visibility":"visible"});
								// $("#"+tn+"-21").css({"visibility":"visible","position":"absolute","left":"272.5px","top":"380px"});	
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:532.5px; top:435px; height: 35px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
								// Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(270deg)";
								document.getElementById(tn+"-46").onclick=function()
								{
									myStopFunction();
									document.getElementById(tn+"-46").onclick="";
									$("#"+tn+"-45").css({"visibility":"visible"});
									$("#"+tn+"-45").animate({"position":"absolute","left":"335px","top":"155px"},700);
									$("#"+tn+"-46").animate({"position":"absolute","left":"345px","top":"256.5px"},700,
									function()
									{
										$("#"+tn+"-45").animate({"position":"absolute","left":"335px","top":"260px"},700);
										$("#"+tn+"-46").animate({"position":"absolute","left":"345px","top":"361.5px"},700,
										function()
										{
											$("#"+tn+"-45").css({"visibility":"hidden"});
											$("#"+tn+"-46").css({"visibility":"hidden"});
											$("#"+tn+"-47").css({"visibility":"visible"});
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:206.5px; top:427px; height: 35px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(270deg)";
											document.getElementById(tn+"-41").onclick=function()
											{
												myStopFunction();
												document.getElementById(tn+"-41").onclick="";
												document.getElementById(tn+"-41").onclick="";
												$("#"+tn+"-41").animate({"position":"absolute","top":"280.5px"},900,
												function()
												{
													$("#"+tn+"-41").animate({"position":"absolute","left":"250.35px","top":"290.5px"},300,
													function()
													{
														document.getElementById("nextButton").style.visibility="visible";
													});
												});
											}
										});
									});
								}
							});
						});
					}
				});
			});	
		}
	}
}

function calcTDS()
{
	$("#pp2").css({"visibility":"visible"});
	$("#p10-5").css({"visibility":"visible"});
	$("#p10-6").css({"visibility":"visible"});
	$("#p10-7").css({"visibility":"visible"});
	$("#in2").css({"visibility":"visible"});
	$("#c2").css({"visibility":"visible"});
	$("#p102").css({"visibility":"visible"});
	
	document.getElementById("p10-5").innerHTML="Weight of empty crucible (W<sub>3</sub>) = "+data3+" g";
	document.getElementById("p10-6").innerHTML="Weight of empty crucible +  solids (W<sub>4</sub>) = "+data4+" g";
		
	document.getElementById("c2").onclick=function()
	{
		if(!document.getElementById("in2").value  || !document.getElementById("in2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			n2 = document.getElementById("in2").value;
				
			if(Math.round(n2) == Math.round(tds))
			{
				document.getElementById("c2").style.visibility="hidden";
				document.getElementById("r2").style.visibility="visible";
				document.getElementById("res2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="hidden";
				document.getElementById("in2").style="border:none;  background-color:white; color:black; width:30px; font-size:15px;"
				document.getElementById("in2").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("r2").style.visibility="hidden";
				document.getElementById("w2").style.visibility="visible";
				document.getElementById("res2").style.visibility="visible";
			}	
		}
	}
	document.getElementById("res2").onclick=function()
	{
		document.getElementById("c2").style.visibility="hidden";
		document.getElementById("r2").style.visibility="hidden";
		document.getElementById("res2").style.visibility="hidden";
		document.getElementById("w2").style.visibility="hidden";
		document.getElementById("in2").value=tds;
		document.getElementById("in2").style="border:none;  background-color:white; color:black; width:30px;  font-size:15px;"
		document.getElementById("in2").disabled="true";
		document.getElementById("nextButton").style.visibility="visible";
	}
}


function calcVSS()
{
	$("#15pp2").css({"visibility":"visible"});
	$("#p15-5").css({"visibility":"visible"});
	$("#p15-7").css({"visibility":"visible"});
	$("#15in2").css({"visibility":"visible"});
	$("#15c2").css({"visibility":"visible"});
	$("#p152").css({"visibility":"visible"});
	
	document.getElementById("p15-5").innerHTML="Total suspended solids (TSS) ="+tss+" mg/l";
		
	document.getElementById("15c2").onclick=function()
	{
		if(!document.getElementById("15in2").value  || !document.getElementById("15in2").value!=" ")
		{
			alert("Enter the value to proceed ");
		}
		else
		{
			nn2 = document.getElementById("15in2").value;
				
			if(Math.round(nn2) == Math.round(vss))
			{
				document.getElementById("15c2").style.visibility="hidden";
				document.getElementById("15r2").style.visibility="visible";
				document.getElementById("15res2").style.visibility="hidden";
				document.getElementById("15w2").style.visibility="hidden";
				document.getElementById("15in2").style="border:none;  background-color:white; color:black; width:30px; font-size:15px;"
				document.getElementById("15in2").disabled="true";
				document.getElementById("nextButton").style.visibility="visible";
			}
			else
			{
				document.getElementById("15r2").style.visibility="hidden";
				document.getElementById("15w2").style.visibility="visible";
				document.getElementById("15res2").style.visibility="visible";
			}	
		}
	}
	document.getElementById("15res2").onclick=function()
	{
		document.getElementById("15c2").style.visibility="hidden";
		document.getElementById("15r2").style.visibility="hidden";
		document.getElementById("15res2").style.visibility="hidden";
		document.getElementById("15w2").style.visibility="hidden";
		document.getElementById("15in2").value=vss;
		document.getElementById("15in2").style="border:none;  background-color:white; color:black; width:30px;  font-size:15px;"
		document.getElementById("15in2").disabled="true";
		document.getElementById("nextButton").style.visibility="visible";
	}
}