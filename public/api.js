const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log("Offline");
      res = db();
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    let res;
    try{
        res = await fetch("/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
        });
      }
    catch (err) {
      console.log("Offline");
      res = pullWorkouts();
      res[-1].exercises.push(data);
      putExercise(res[-1]);
    }

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    let res;
    try{
      const res = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
    }
    catch(err){
      console.log("Offline");
      res = saveRecord(data);
    }

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts/bulk", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
