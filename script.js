function addAchievement() {
  const container = document.querySelector(".achieveform");
  const newAchievement = document.createElement("div");
  newAchievement.classList.add("achieveinput");
  newAchievement.innerHTML = `
  
            <div class="achieveitem">
              <label for="title" class="item">Title</label>
              <input type="text" class="item" placeholder="eg. Hackathon" />
            </div>
            <div class="achieveitem">
              <label for="title" class="item">Description</label>
              <input type="text" class="item" placeholder="eg. Elaborate" />
              
            </div>
            <button type="button" class="remove-btn" onclick="removeAchievement(this)">-</button>`;
  container.insertBefore(newAchievement, container.lastElementChild);
}
function removeAchievement(btn) {
  const element = btn.parentElement;

  element.remove();
}
function addSkill() {
  const container = document.querySelector(".skillinput");
  const newSkill = document.createElement("div");
  newSkill.classList.add("skillbox");
  newSkill.innerHTML = ` <label for="" class="item">Skill Name</label>
            <input type="text" class="item" placeholder="eg. Java" />
            <button type="button" class="remove-btn" onclick="removeAchievement(this)">-</button>
  `;
  container.insertBefore(newSkill, container.lastElementChild);
}
function addExp() {
  const container = document.querySelector(".exp");
  const column = document.createElement("div");

  column.classList.add("expbox");

  column.innerHTML = `
   <div class="column">
          <div class="about" id="names">
            <label for="names" class="item">Title</label
            ><input type="text" class="item" placeholder="eg. Hr" />
          </div>
          <div class="about">
            <label for="" class="item">Company Name</label
            ><input type="text" class="item" placeholder="eg. Microsoft" />
          </div>
          <div class="about">
            <label for="" class="item">Location</label
            ><input type="text" class="item" placeholder="eg. Dombivli" />
          </div>
        </div>
        <div class="column">
          <div class="about" id="names">
            <label for="names" class="item"> Joining Date</label
            ><input type="date" class="item" placeholder="eg. Shubham" />
          </div>
          <div class="about">
            <label for="" class="item">Leaving Date</label
            ><input type="date" class="item" placeholder="eg. " />
          </div>
          <div class="about">
            <label for="" class="item">Description</label
            ><input type="text" class="item" placeholder="eg. Description" />
          </div>
        </div>
        <button type="button" class="remove-btn right" onclick="removeAchievement(this)">-</button>
      `;
  container.insertBefore(column, container.lastElementChild);
}
function addEdu() {
  const container = document.querySelector(".edu");
  const newEdu = document.createElement("div");
  newEdu.classList.add("edubox");
  newEdu.innerHTML = `<div class="column">
 <div class="about" id="names">
            <label class="item">Institute</label><input type="text" class="item" placeholder="eg. Hr" />
          </div>
          <div class="about">
            <label for="" class="item">Course Name</label><input type="text" class="item"
              placeholder="eg. Microsoft" />
          </div>
          <div class="about">
            <label for="" class="item">Location</label><input type="text" class="item" placeholder="eg. Dombivli" />
          </div>
        </div>       

        <div class="column">
          <div class="about" id="names">
            <label class="item"> Joining Date</label><input type="date" class="item" placeholder="eg. Shubham" />
          </div>
          <div class="about">
            <label class="item">Leaving Date</label><input type="date" class="item" placeholder="eg. " />
          </div>
          <div class="about">
            <label class="item">Description</label><input type="text" class="item" placeholder="eg. Description" />
          </div>
        </div> <button type="button" class="remove-btn right" onclick="removeAchievement(this)">-</button>
  `;
  container.insertBefore(newEdu, container.lastElementChild);
}
