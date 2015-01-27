window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;    
function errorHandler(e) {
 console.error('Error: ' + e.code);
}   

var read = function (file,callback) {
window.requestFileSystem(window.TEMPORARY, 35*1024*1024, function(fs){
  fs.root.getFile(file, {}, function(fileEntry) {
    fileEntry.file(function(file) {
       var reader = new FileReader();
       reader.onloadend = function(e) {
         callback(this.result)
       };
       reader.readAsText(file);
    }, errorHandler);
  }, errorHandler);
})
}

var save = function (file,content,callback) {
window.requestFileSystem(window.TEMPORARY, 35*1024*1024, function(fs){
  fs.root.getFile(file, {create: true, exclusive: false}, function(fileEntry) {
    fileEntry.createWriter(function(fileWriter) {
      fileWriter.onwriteend = function(e) {
        callback(content);
      };
      fileWriter.onerror = function(e) {
        console.error('Write failed: ' + e.toString());
      };
      var blob = new Blob([content], {type: 'text/plain'});
      fileWriter.write(blob);
    }, errorHandler);
  }, errorHandler);
})
}


var is_file = function(file,yes,no){
window.requestFileSystem(window.TEMPORARY, 35*1024*1024, function(fs){
  var dirReader = fs.root.createReader();
   dirReader.readEntries (function(results) {
   	if(results == ''){ no(); }
   	var t = true;
     results.forEach(function(entry, i) { if(t){ if(entry.name == file){ yes(); t = false; }else if(results.length == i+1){ no(); } } })
  
   })
}, errorHandler);
}

var loa = function(url,id,callback) {
chrome.storage.local.get('cache', function (result) {
    if (result.cache == '' || result.cache == undefined || result.cache == '0') {
document.getElementById("cache").checked = false;
        $.ajax({
        url: url,
        async: true,
        dataType: "blob",
        success: function(data, textStatus) {
          callback(id,window.webkitURL.createObjectURL(data)); 
        }
      })
    } else {
document.getElementById("cache").checked = true;
is_file(id.toString()+'.txt',function(){//Если такой файл есть то получаем ссылку
read(id.toString()+'.txt',function(e){
  callback(id,e);
})
},function(){//если такого файла нет,то загружаем и сохраняем и выводим ссылку
        $.ajax({
        url: url,
        async: true,
        dataType: "blob",
        success: function(data, textStatus) {
          save(id.toString()+'.txt',window.webkitURL.createObjectURL(data),function(e){ callback(id,e); }); 
        }
      })
})
    }
})
}
var clear_cache = function(){
window.requestFileSystem(window.TEMPORARY, 35*1024*1024, function(fs){
  var dirReader = fs.root.createReader();
   dirReader.readEntries (function(results) {
   	var t = true;
     results.forEach(function(entry, i) { 
     	 entry.remove(function() { }, errorHandler);
     })
    })
}, errorHandler);
}