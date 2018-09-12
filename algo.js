$(document).ready(function(){var cubesPerStackArray;setTimeout(function(){$("#arrangeOpening").click()},500);$(document).on('click','#arrangeOpening',function(){var w1=parseInt($("#w1").val());var w2=parseInt($("#w2").val());var w3=parseInt($("#w3").val());cubesPerStackArray=calcStacksAndCubes(w1,w2,w3);console.log(cubesPerStackArray);renderStacksInfo(cubesPerStackArray);calcCurrentStacksAndCubes()});$(document).on('click','#searchCase',function(){var w1=parseInt($("#w1").val());var w2=parseInt($("#w2").val());var w3=parseInt($("#w3").val());cubesPerStackArray=calcStacksAndCubes(w1,w2,w3);console.log(cubesPerStackArray);renderStacksSearchInfo(cubesPerStackArray,!0);calcCurrentStacksAndCubes()});$(document).on('click','#inarrange',function(){var w1=parseInt($("#top").text());var w2=parseInt($("#medium").text());var w3=parseInt($("#low").text());alert(w1,w2,w3);var iw1=$("#iw1").val()+$("#iw4").val();var iw2=$("#iw2").val()+$("#iw5").val();var iw3=$("#iw3").val()+$("#iw6").val();if(iw1==''||iw2==''||iw3=='')
{return!1}
else{$("#iw1,#iw2,#iw3,#iw4,#iw5,#iw6").val('');$("#top").val(parseInt(w1)+parseInt(iw1));$("#medium").val(parseInt(w2)+parseInt(iw2));$("#low").val(parseInt(w3)+parseInt(iw3));cubesPerStackArray=calcTempStacksAndCubesAdd(iw1,iw2,iw3,cubesPerStackArray);renderStacksInfo(cubesPerStackArray);calcCurrentStacksAndCubes()}});$(document).on('click','#outarrange',function(){var w1=parseInt($("#w1").val());var w2=parseInt($("#w2").val());var w3=parseInt($("#w3").val());var ow1=$("#ow1").val();var ow2=$("#ow2").val();var ow3=$("#ow3").val();if(ow1==''||ow2==''||ow3=='')
{return!1}
else{$("#ow1,#ow2,#ow3").val('')
$("#w1").val(parseInt(w1)-parseInt(ow1));$("#w2").val(parseInt(w2)-parseInt(ow2));$("#w3").val(parseInt(w3)-parseInt(ow3));var w1=parseInt($("#w1").val());var w2=parseInt($("#w2").val());var w3=parseInt($("#w3").val());cubesPerStackArray=calcTempStacksAndCubesRemove(ow1,ow2,ow3,cubesPerStackArray);renderStacksInfo(cubesPerStackArray);calcCurrentStacksAndCubes()}})});function calcCurrentStacksAndCubes()
{setTimeout(function(){var w1=$("#w1").val();var w2=$("#w2").val();var w3=$("#w3").val();var tot=Math.ceil(w1/216)+Math.ceil(w2/168)+Math.ceil(w3/112);$("#ssc").val(tot)},100)}
function calcTempStacksAndCubesRemove(hl,ml,ll,cubesPerStackArray)
{var hlReq=hl;var mlReq=ml;var llReq=ll;var hlRemStack=0;var mlRemStack=0;var llRemStack=0;var removedStackcubesPerArray=[];for(var i=cubesPerStackArray.length-1;i>=0;i--)
{var currenthlcount=cubesPerStackArray[i][1];var currentmlcount=cubesPerStackArray[i][2];var currentllcount=cubesPerStackArray[i][3];var stackCount=cubesPerStackArray[i][0];var ha=0;var ma=0;var la=0;hlReq=hlReq-currenthlcount;mlReq=mlReq-currentmlcount;llReq=llReq-currentllcount;var stackProcessing='no';if(hlReq>0)
{ha=currenthlcount;stackProcessing='yes'}
else{if(currenthlcount+hlReq>0)
{stackProcessing='yes';hlRemStack=currenthlcount+hlReq;ha=hlRemStack}}
if(mlReq>0)
{ma=currentmlcount;stackProcessing='yes'}
else{if(currentmlcount+mlReq>0)
{stackProcessing='yes';mlRemStack=currentmlcount+mlReq;ma=mlRemStack}}
if(llReq>0)
{la=currentllcount;stackProcessing='yes'}
else{if(currentllcount+llReq>0)
{stackProcessing='yes';llRemStack=currentllcount+llReq;la=llRemStack}}
if(stackProcessing=='yes')
{var fulStack='no';if(ha+ma+la==216)
{fulStack='yes'}
var inary=[stackCount,ha,ma,la,fulStack];removedStackcubesPerArray.push(inary)}}
renderRemovedStacksInfo(removedStackcubesPerArray);for(var i=0;i<removedStackcubesPerArray.length;i++)
{var stackNo=removedStackcubesPerArray[i][0];var highLamina=removedStackcubesPerArray[i][1];var midLamina=removedStackcubesPerArray[i][2];var lowLamina=removedStackcubesPerArray[i][3];var stackFul=removedStackcubesPerArray[i][4];cubesPerStackArray=rearraangeCubes(cubesPerStackArray,stackNo,highLamina,midLamina,lowLamina,stackFul)}
cubesPerStackArray=removeZeroStacks(cubesPerStackArray);return cubesPerStackArray}
function removeZeroStacks(cubesPerStackArray)
{var newStacksArrangement=[];for(var i=0;i<cubesPerStackArray.length;i++)
{var stackNo=cubesPerStackArray[i][0];var highLamina=cubesPerStackArray[i][1];var midLamina=cubesPerStackArray[i][2];var lowLamina=cubesPerStackArray[i][3];var isFull=cubesPerStackArray[i][4];if(highLamina>0||midLamina>0||lowLamina>0)
{var newTemp=[stackNo,highLamina,midLamina,lowLamina,isFull];newStacksArrangement.push(newTemp)}}
return newStacksArrangement}
function rearraangeCubes(cubesPerStackArray,stackNo,highLamina,midLamina,lowLamina,stackFul)
{for(var i=0;i<cubesPerStackArray.length;i++)
{if(cubesPerStackArray[i][0]==stackNo)
{var highLamina=cubesPerStackArray[i][1]-highLamina;var midLamina=cubesPerStackArray[i][2]-midLamina;var lowLamina=cubesPerStackArray[i][3]-lowLamina;cubesPerStackArray[i]=[stackNo,highLamina,midLamina,lowLamina,'no']}}
return cubesPerStackArray}
function calcTempStacksAndCubesAdd(hl,ml,ll,cubesPerStackArray)
{var baseReceivedArray=[];var fullstacksCount=0;var a=0;var b=0;var c=0;for(var i=0;i<cubesPerStackArray.length;i++)
{if(cubesPerStackArray[i][4]=='no')
{a=cubesPerStackArray[i][1];b=cubesPerStackArray[i][2];c=cubesPerStackArray[i][3];hl=parseInt(hl)+a;ml=parseInt(ml)+b;ll=parseInt(ll)+c}
else{fullstacksCount++}}
var remHlCubes=hl;var remMlCubes=ml;var remLlCubes=ll;var totalCubesInStack=216;var totalStacks=((hl+ml+ll)/totalCubesInStack).toFixed(2);var hlCubesPerStack=(hl/totalStacks).toFixed();var mlCubesPerStack=(ml/totalStacks).toFixed();var llCubesPerStack=totalCubesInStack-(parseInt(hlCubesPerStack)+parseInt(mlCubesPerStack));var stacksCountBase='TOPLAMINA';if(mlCubesPerStack>160)
{mlCubesPerStack=160;totalStacks=(ml/mlCubesPerStack).toFixed(2);hlCubesPerStack=(hl/totalStacks).toFixed();mlCubesPerStack=(ml/totalStacks).toFixed();llCubesPerStack=totalCubesInStack-(parseInt(hlCubesPerStack)+parseInt(mlCubesPerStack));stacksCountBase='MEDIUMLAMINA'}
if(llCubesPerStack>104)
{llCubesPerStack=104;totalStacks=(ll/llCubesPerStack).toFixed(2);hlCubesPerStack=(hl/totalStacks).toFixed();mlCubesPerStack=(ml/totalStacks).toFixed();stacksCountBase='LOWLAMINA'}
hlCubesPerStack=parseInt(hlCubesPerStack);mlCubesPerStack=parseInt(mlCubesPerStack);llCubesPerStack=parseInt(llCubesPerStack);cubesPerStackArray.splice(fullstacksCount);var stackNo=parseInt(cubesPerStackArray.length);for(var i=0;i<=parseInt(totalStacks);i++)
{stackNo=stackNo+1;var mlCubesInStack=0;var hlCubesInStack=0;var llCubesInStack=0;if(remHlCubes>0)
{hlCubesInStack=hlCubesPerStack;remHlCubes=remHlCubes-hlCubesInStack;if(remHlCubes<=0)
{hlCubesInStack=hlCubesPerStack+remHlCubes;remHlCubes=0}}
if(remMlCubes>0)
{mlCubesInStack=mlCubesPerStack;remMlCubes=remMlCubes-mlCubesInStack;if(remMlCubes<=0)
{mlCubesInStack=mlCubesPerStack+remMlCubes;remMlCubes=0}}
if(remLlCubes>0)
{llCubesInStack=llCubesPerStack;remLlCubes=remLlCubes-llCubesInStack;if(remLlCubes<=0)
{llCubesInStack=llCubesPerStack+remLlCubes;remLlCubes=0}}
var totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);var isFull='no';if(totCubesInStack==totalCubesInStack)
{isFull='yes'}
else{var req=totalCubesInStack-totCubesInStack;req=parseInt(req);if(stacksCountBase=='MEDIUMLAMINA')
{if(totCubesInStack>168&&totCubesInStack<194)
{mlCubesInStack=160}
if(totCubesInStack<168)
{mlCubesInStack=162}
if(remHlCubes>0)
{hlCubesInStack=hlCubesInStack+req;if(hlCubesInStack>remHlCubes)
{hlCubesInStack=remHlCubes+(hlCubesInStack-req);remHlCubes=remHlCubes-req}
else{remHlCubes=remHlCubes-req}}
totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);req=totalCubesInStack-totCubesInStack;if(remLlCubes>0&&req>0)
{llCubesInStack=llCubesInStack+req;if(llCubesInStack>remLlCubes)
{llCubesInStack=remLlCubes+(llCubesInStack-req);remLlCubes=remLlCubes-req}
else{remLlCubes=remLlCubes-req}}}
if(stacksCountBase=='LOWLAMINA')
{if(totCubesInStack>168&&totCubesInStack<194)
{llCubesPerStack=106}
if(totCubesInStack<168)
{llCubesPerStack=112}
totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);req=totalCubesInStack-totCubesInStack;if(remMlCubes>0)
{mlCubesInStack=mlCubesInStack+req;if(mlCubesInStack>remMlCubes)
{mlCubesInStack=remMlCubes+(mlCubesInStack-req);remMlCubes=remMlCubes-req}
else{remMlCubes=remMlCubes-req}}
totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);req=totalCubesInStack-totCubesInStack;if(remHlCubes>0&&req>0)
{hlCubesInStack=hlCubesInStack+req;if(hlCubesInStack>remHlCubes)
{hlCubesInStack=remHlCubes+(hlCubesInStack-req);remHlCubes=remHlCubes-req}
else{remHlCubes=remHlCubes-req}}}
totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);isFull='no';if(totCubesInStack==totalCubesInStack)
{isFull='yes'}}
var stack=[stackNo,hlCubesInStack,mlCubesInStack,llCubesInStack,isFull];cubesPerStackArray.push(stack);baseReceivedArray.push(stack)}
renderReceivedStacksInfo(baseReceivedArray,a,b,c);return cubesPerStackArray}
function calcStacksAndCubes(hl,ml,ll)
{var totalStacks=((hl+ml+ll)/216).toFixed(2);var hlCubesPerStack=(hl/totalStacks).toFixed();var mlCubesPerStack=(ml/totalStacks).toFixed();var llCubesPerStack=216-(parseInt(hlCubesPerStack)+parseInt(mlCubesPerStack))
var cubesPerStackArray=[];for(var i=1;i<=parseInt(totalStacks)+1;i++)
{var stackNo=i;var hlCubes=i*hlCubesPerStack;var hlCubesInStack=parseInt(hlCubesPerStack);if(hlCubes>hl)
{hlCubes=parseInt(parseInt(hl)+parseInt(hlCubesPerStack))-(i*hlCubesPerStack);hlCubesInStack=hlCubes}
var mlCubes=i*mlCubesPerStack;var mlCubesInStack=parseInt(mlCubesPerStack);if(mlCubes>ml)
{mlCubes=parseInt(parseInt(ml)+parseInt(mlCubesPerStack))-(i*mlCubesPerStack);mlCubesInStack=mlCubes}
var llCubes=i*llCubesPerStack;var llCubesInStack=parseInt(llCubesPerStack);if(llCubes>ll)
{llCubes=parseInt(parseInt(ll)+parseInt(llCubesPerStack))-(i*llCubesPerStack);llCubesInStack=llCubes}
var totCubesInStack=parseInt(hlCubesInStack)+parseInt(mlCubesInStack)+parseInt(llCubesInStack);var isFull='no';if(totCubesInStack==216)
{isFull='yes'}
var stack=[stackNo,hlCubesInStack,mlCubesInStack,llCubesInStack,isFull];cubesPerStackArray.push(stack)}
return cubesPerStackArray}
function renderRemovedStacksInfo(cubesPerStackArray)
{var data='<div class="calcInDiv"><h3>Cubes To Remove from Stack</h3><table cellpadding="5" rules="rows" cellspacing = "0"><tr><th>Stack No</th><th>Lamina Top</th><th>Medium</th><th>Low</th><th>Stack Full</th></tr>';var ht=0;var mt=0;var lt=0;for(var i=0;i<cubesPerStackArray.length;i++)
{ht=ht+cubesPerStackArray[i][1];mt=mt+cubesPerStackArray[i][2];lt=lt+cubesPerStackArray[i][3];data+='<tr><td style="text-align:center;">'+cubesPerStackArray[i][0]+'</td>';data+='<td style="text-align:center;">'+cubesPerStackArray[i][1]+'</td>';data+='<td style="text-align:center;">'+cubesPerStackArray[i][2]+'</td>';data+='<td style="text-align:center;">'+cubesPerStackArray[i][3]+'</td>';data+='<td style="text-align:center;">'+cubesPerStackArray[i][4]+'</td></tr>'}
data+='<tr><td style="text-align:center;">Total</td>';data+='<td style="text-align:center;">'+ht+'</td>';data+='<td style="text-align:center;">'+mt+'</td>';data+='<td style="text-align:center;">'+lt+'</td>';data+='<td style="text-align:center;"></td></tr>';data+='</table></div>';$('body').append(data);$("#ssp").val(cubesPerStackArray.length)}
function renderReceivedStacksInfo(baseReceivedArray,a,b,c)
{var data='<div class="calcInDiv"><h3>Cubes To Add in Stacks</h3><table cellpadding="5" rules="rows" cellspacing = "0"><tr><th>Stack No</th><th>Lamina Top</th><th>Medium</th><th>Low</th><th>Stack Full</th></tr>';data+='<tr><td style="text-align:center;" colspan="5"><h4>Previous unfilled Stack Cubes</h4></td></tr>';data+='<tr><td style="text-align:center;">Total</td>';data+='<td style="text-align:center;">'+a+'</td>';data+='<td style="text-align:center;">'+b+'</td>';data+='<td style="text-align:center;">'+c+'</td>';data+='<td style="text-align:center;"></td></tr>';data+='<tr><td style="text-align:center;" colspan="5"><h4>After all cubes arrangement</h4></td></tr>';var ht=0;var mt=0;var lt=0;for(var i=0;i<baseReceivedArray.length;i++)
{ht=ht+baseReceivedArray[i][1];mt=mt+baseReceivedArray[i][2];lt=lt+baseReceivedArray[i][3];data+='<tr><td style="text-align:center;">'+baseReceivedArray[i][0]+'</td>';data+='<td style="text-align:center;">'+baseReceivedArray[i][1]+'</td>';data+='<td style="text-align:center;">'+baseReceivedArray[i][2]+'</td>';data+='<td style="text-align:center;">'+baseReceivedArray[i][3]+'</td>';data+='<td style="text-align:center;">'+baseReceivedArray[i][4]+'</td></tr>'}
data+='<tr><td style="text-align:center;">Total</td>';data+='<td style="text-align:center;">'+ht+'</td>';data+='<td style="text-align:center;">'+mt+'</td>';data+='<td style="text-align:center;">'+lt+'</td>';data+='<td style="text-align:center;"></td></tr>';data+='</table></div>';$('body').append(data)}
function renderStacksInfo(cubesPerStackArray)
{stackCreate();cloneStack(28,cubesPerStackArray,!1);if(cubesPerStackArray.length>28)
{alert('Stacks limit exceeded');return!1}
$("#ssp").val(cubesPerStackArray.length)}
function renderStacksSearchInfo(cubesPerStackArray,issearch)
{stackCreate();cloneStack(28,cubesPerStackArray,issearch);if(cubesPerStackArray.length>28)
{alert('Stacks limit exceeded');return!1}
$("#ssp").val(cubesPerStackArray.length)}