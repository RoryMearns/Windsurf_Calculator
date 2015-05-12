/* JavaScript/jQuery for windsurf calculator website */

var weightKG = 85, 
weightAlfa = 2.20462262185,  // kg-lb conversion factor
sailAlpha = 1.34,
finAlpha = 4.9383,
finExtra = 3.0988,
skilled = "selected", 
learner = "not_selected"
freeride = "selected",
wave = "not_selected";

/* --- Function to update the DOM --- */
function update() {
  $('#weight_lb').val((weightKG * weightAlfa).toFixed(0));
  $('#weight_kg').val((weightKG*1).toFixed(0));
  
  var weightFactor = sailAlpha*weightKG
  $("#sail10").html((weightFactor/10).toFixed(1));
  $("#sail15").html((weightFactor/15).toFixed(1));
  $("#sail20").html((weightFactor/20).toFixed(1));
  $("#sail25").html((weightFactor/25).toFixed(1));
  $("#sail30").html((weightFactor/30).toFixed(1));
  $("#sail35").html((weightFactor/35).toFixed(1));
  
  var finFactor = 1.34*weightKG;
  $("#fin10").html((finAlpha*(finFactor/10)+finExtra).toFixed(0));
  $("#fin15").html((finAlpha*(finFactor/15)+finExtra).toFixed(0));
  $("#fin20").html((finAlpha*(finFactor/20)+finExtra).toFixed(0));
  $("#fin25").html((finAlpha*(finFactor/25)+finExtra).toFixed(0));
  $("#fin30").html((finAlpha*(finFactor/30)+finExtra).toFixed(0));
  $("#fin35").html((finAlpha*(finFactor/35)+finExtra).toFixed(0));
};

function adjustSkill () {
  var temp = skilled;
  skilled = learner;
  learner = temp;
  (sailAlpha == 1.34) ? (sailAlpha = 0.62) : (sailAlpha = 1.34);
  $("#skilled").attr('class', skilled);
  $("#learner").attr('class', learner);
  update();
};

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
}

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
});
