let db;

const request = indexedDB.open("workouts", 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore("workouts", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Error " + event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(["workouts"], "readwrite");
  const store = transaction.objectStore("workouts");

  store.add(record);

  // clear form
  $("#firstName").val("");
  $("#lastName").val("");
  $("#guests").val(0);
}

function checkDatabase() {
  const transaction = db.transaction(["workouts"], "readwrite");
  const store = transaction.objectStore("workouts");
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    //if there are any documents waiting to be online, bulk push
    if (getAll.result.length > 0) {
    
      $.ajax({
        type: "POST",
        url: "/api/workouts/bulk",
        data: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        success: function(msg){
            const transaction = db.transaction(["workouts"], "readwrite");
            const store = transaction.objectStore("workouts");
            store.clear();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log(getAll.result);
          console.log("Failed to Save DB");
          console.log(XMLHttpRequest, textStatus, errorThrown)
        }
      });
    }
  };
}

function pullWorkouts(){
  const transaction = db.transaction(["workouts"], "readwrite");
  const store = transaction.objectStore("workouts");
  const getAll = store.getAll();
  return getAll;
}
function putExercise(object){
  const transaction = db.transaction(["workouts"], "readwrite");
  const store = transaction.objectStore("workouts");
  const putOne = store.put(object);
  return putOne;
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);

//Trigger some css when offline
window.addEventListener("offline", isOffline, false);