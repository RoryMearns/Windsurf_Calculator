/* JavaScript/jQuery for windsurf calculator website */

var weightKG = 85, 
weightAlfa = 2.20462262185,  // kg-lb conversion factor
sailAlpha = 1.34,
finAlpha = 4.9383,
finExtra = 3.0988,
skilled = "selected", 
learner = "not_selected"
freeride = "selected",
wave = "not_selected",
customWind1 = false,
customWind2 = false,
customWind3 = false;

// Function to update the DOM
function update() {
  $('#weight_lb').val((weightKG * weightAlfa).toFixed(0));
  $('#weight_kg').val((weightKG*1).toFixed(0));
  
  var weightFactor = sailAlpha*weightKG
  var finFactor = 1.34*weightKG;

  $("#sail10").html((weightFactor/10).toFixed(1));
  $("#sail15").html((weightFactor/15).toFixed(1));
  $("#sail20").html((weightFactor/20).toFixed(1));
  $("#sail25").html((weightFactor/25).toFixed(1));
  $("#sail30").html((weightFactor/30).toFixed(1));
  $("#sail35").html((weightFactor/35).toFixed(1));

  customWind1 ? ($("#c1wind").html(customWind1), $("#c1sail").html((weightFactor/customWind1).toFixed(1))) : '';
  customWind2 ? ($("#c2wind").html(customWind2), $("#c2sail").html((weightFactor/customWind2).toFixed(1))) : '';
  customWind3 ? ($("#c3wind").html(customWind3), $("#c3sail").html((weightFactor/customWind3).toFixed(1))) : '';
  
  $("#fin10").html((finAlpha*(finFactor/10)+finExtra).toFixed(0));
  $("#fin15").html((finAlpha*(finFactor/15)+finExtra).toFixed(0));
  $("#fin20").html((finAlpha*(finFactor/20)+finExtra).toFixed(0));
  $("#fin25").html((finAlpha*(finFactor/25)+finExtra).toFixed(0));
  $("#fin30").html((finAlpha*(finFactor/30)+finExtra).toFixed(0));
  $("#fin35").html((finAlpha*(finFactor/35)+finExtra).toFixed(0));

  customWind1 ? $("#c1fin").html((finAlpha*(finFactor/customWind1)+finExtra).toFixed(0)) : '';
  customWind2 ? $("#c2fin").html((finAlpha*(finFactor/customWind2)+finExtra).toFixed(0)) : '';
  customWind3 ? $("#c3fin").html((finAlpha*(finFactor/customWind3)+finExtra).toFixed(0)) : '';

  ($("#custom1").val() == '') ? ($("#c1wind").html(''), $("#c1sail").html(''), $("#c1fin").html('')) : '';
  ($("#custom2").val() == '') ? ($("#c2wind").html(''), $("#c2sail").html(''), $("#c2fin").html('')) : '';
  ($("#custom3").val() == '') ? ($("#c3wind").html(''), $("#c3sail").html(''), $("#c3fin").html('')) : '';

  
};

// Make changes depending on the skill level selected by the user
function adjustSkill () {
  var temp = skilled;
  skilled = learner;
  learner = temp;
  (sailAlpha == 1.34) ? (sailAlpha = 0.62) : (sailAlpha = 1.34);
  $("#skilled").attr('class', skilled);
  $("#learner").attr('class', learner);
  update();
};

// Make changes depending on the style selected by user
function adjustStyle () {
  var temp = freeride;
  freeride = wave;
  wave = temp;

  if (finAlpha == 4.9383) {
    finAlpha = 3.3859;
    finExtra = 6.6868;
  } else {
    finAlpha = 4.9383;
    finExtra = 3.0988;
  }
  $("#freeride").attr('class', freeride);
  $("#wave").attr('class', wave);
  update();
};

function customWind () {

};

/* --- Function to listen for changes --- */
$(document).ready(function() {
  $("#weight_kg").change(function() {
    weightKG = $("#weight_kg").val();
    update();
  });
  $("#weight_lb").change(function() {
    weightKG = $("#weight_lb").val() / weightAlfa;
    update();
  });
  $("#skilled").click(function() {
    (skilled == "selected") ? update() : adjustSkill();
  });
  $("#learner").click(function() {
    (learner == "selected") ? update() : adjustSkill();
  });
  $("#freeride").click(function() {
    (freeride == "selected") ? update() : adjustStyle();
  });
  $("#wave").click(function() {
    (wave == "selected") ? update() : adjustStyle();
  });
  $("#custom1").change(function() {
    customWind1 = $("#custom1").val();
    update();
  });
  $("#custom2").change(function() {
    customWind2 = $("#custom2").val();
    update();
  });
  $("#custom3").change(function() {
    customWind3 = $("#custom3").val();
    update();
  });
});

update();
