// Quran audio cdn files
// http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/262


var audioCdn = function(numberAyah) {
  return 'http://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/'+numberAyah;
}

var currentParent = null;

function playAudio(){

  if(!currentParent) {
    
  }

  var parent = $(this).closest('.surah-detail');
  currentParent = parent;
  var ayahNumber = parent.data('ayah');
  
  
  

}



$('.btn-audio').click(playAudio);

