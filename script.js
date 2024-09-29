let achievementCounter = 1; // Track the number of achievement inputs

// Function to add a new achievement input field
function addAchievement() {
  achievementCounter++;

  const container = document.querySelector(".achieveform");
  const newAchievement = document.createElement("div");
  newAchievement.classList.add("achieveinput");

  // Set up the new achievement input HTML with dynamic class names and event listeners
  newAchievement.innerHTML = `
      <div class="achieveitem">
        <label for="title" class="item">Title</label>
        <input type="text" class="item titleinput${achievementCounter}" placeholder="eg. Hackathon" oninput="updateAchieve(${achievementCounter})"/>
      </div>
      <div class="achieveitem">
        <label for="description" class="item">Description</label>
        <input type="text" class="item desinput${achievementCounter}" placeholder="eg. Elaborate" oninput="updatedes(${achievementCounter})"/>
      </div>
      <button type="button" class="remove-btn" onclick="removeAchievement(this, ${achievementCounter})">-</button>
    `;

  // Insert the new achievement input before the add button
  container.insertBefore(newAchievement, container.lastElementChild);
}

// Function to remove an achievement input field and its preview
function removeAchievement(btn, achievementNumber) {
  const element = btn.parentElement;

  // Remove the input element
  element.remove();

  // Clear the corresponding live preview
  const titlePreview = document.querySelector(`.titleitem${achievementNumber}`);
  const desPreview = document.querySelector(`.desitem${achievementNumber}`);

  if (titlePreview) {
    titlePreview.textContent = "";
  }
  if (desPreview) {
    desPreview.textContent = "";
  }
}

// Function to update the achievement title in the live preview
function updateAchieve(achievementNumber = 1) {
  // Select the input field for the title based on the achievement number
  const input = document.querySelector(`.titleinput${achievementNumber}`);

  // Get the value entered in the input
  const titleValue = input ? input.value : "";

  // Update the corresponding achievement title in live preview
  const titlePreview = document.querySelector(
    `.achieveitem${achievementNumber}`
  );
  if (titlePreview) {
    titlePreview.textContent = titleValue;
  }
}

// Function to update the achievement description in the live preview
function updatedes(achievementNumber = 1) {
  // Select the input field for the description based on the achievement number
  const input = document.querySelector(`.desinput${achievementNumber}`);

  // Get the value entered in the input
  const desValue = input ? input.value : "";

  // Update the corresponding achievement description in live preview
  const desPreview = document.querySelector(`.desitem${achievementNumber}`);
  if (desPreview) {
    desPreview.textContent = desValue;
  }
}

// Add event listeners for the first input fields
document.querySelector(".titleinput1").addEventListener("input", function () {
  updateAchieve(1);
});

document.querySelector(".desinput1").addEventListener("input", function () {
  updatedes(1);
});

let skillcounter = 1;
function addSkill() {
  skillcounter++;
  const container = document.querySelector(".skillinput");
  const newSkill = document.createElement("div");
  newSkill.classList.add("skillbox");
  newSkill.innerHTML = ` <label for="" class="item">Skill Name</label>
            <input type="text" class="item inputskill${skillcounter}" placeholder="eg. Java" oninput="updateskill(skillcounter)" />
            <button type="button" class="remove-btn" onclick="removeSkill(this)">-</button>
  `;
  container.insertBefore(newSkill, container.lastElementChild);
}
let expcounter = 1;

function addExp() {
  expcounter++;
  const container = document.querySelector(".exp");
  const column = document.createElement("div");

  // Assigning a unique ID to each new experience block
  column.classList.add("expbox");
  column.setAttribute("id", `expbox${expcounter}`);

  column.innerHTML = `
    <div class="column">
      <div class="about" id="names">
        <label for="names" class="item ">Title</label>
        <input type="text" class="item exptitle${expcounter}" placeholder="eg. Hr" oninput="updateTitle(${expcounter})" />
      </div>
      <div class="about">
        <label for="" class="item ">Company Name</label>
        <input type="text" class="item expcompany${expcounter}" placeholder="eg. Microsoft" oninput="updateCompany(${expcounter})" />
      </div>
      <div class="about">
        <label for="" class="item ">Location</label>
        <input type="text" class="item explocation${expcounter}" placeholder="eg. Dombivli" oninput="updateLocation(${expcounter})" />
      </div>
    </div>
    <div class="column">
      <div class="about" id="names">
        <label for="names" class="item">Joining Date</label>
        <input type="date" class="item expjoin${expcounter}" oninput="updateJoin(${expcounter})" />
      </div>
      <div class="about">
        <label for="" class="item">Leaving Date</label>
        <input type="date" class="item expleave${expcounter}" oninput="updateLeave(${expcounter})" />
      </div>
      <div class="about">
        <label for="" class="item ">Description</label>
        <input type="text" class="item expdes${expcounter}" placeholder="eg. Description" oninput="updateDescription(${expcounter})" />
      </div>
    </div>
    <button type="button" class="remove-btn right" onclick="removeExperience(${expcounter})">-</button>
  `;

  container.insertBefore(column, container.lastElementChild);
}

function removeExperience(counter) {
  // Remove the experience input section
  const experienceBox = document.getElementById(`expbox${counter}`);
  if (experienceBox) {
    experienceBox.remove();
  }

  // Remove the corresponding live preview elements
  const titlePreview = document.querySelector(`.titleexp${counter}`);
  const companyPreview = document.querySelector(`.companyexp${counter}`);
  const locationPreview = document.querySelector(`.locationexp${counter}`);
  const joinPreview = document.querySelector(`.joinexp${counter}`);
  const leavePreview = document.querySelector(`.leaveexp${counter}`);
  const descriptionPreview = document.querySelector(`.desexp${counter}`);

  if (titlePreview) titlePreview.textContent = "";
  if (companyPreview) companyPreview.textContent = "";
  if (locationPreview) locationPreview.textContent = "";
  if (joinPreview) joinPreview.textContent = "";
  if (leavePreview) leavePreview.textContent = "";
  if (descriptionPreview) descriptionPreview.textContent = "";
}
// Function to update Title
function updateTitle(counter) {
  const input = document.querySelector(`.exptitle${counter}`);
  const livePreview = document.querySelector(`.titleexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}

// Function to update Company Name
function updateCompany(counter) {
  const input = document.querySelector(`.expcompany${counter}`);
  const livePreview = document.querySelector(`.companyexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}

// Function to update Location
function updateLocation(counter) {
  const input = document.querySelector(`.explocation${counter}`);
  const livePreview = document.querySelector(`.locationexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}

// Function to update Joining Date
function updateJoin(counter) {
  const input = document.querySelector(`.expjoin${counter}`);
  const livePreview = document.querySelector(`.joinexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}

// Function to update Leaving Date
function updateLeave(counter) {
  const input = document.querySelector(`.expleave${counter}`);
  const livePreview = document.querySelector(`.leaveexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}

// Function to update Description
function updateDescription(counter) {
  const input = document.querySelector(`.expdes${counter}`);
  const livePreview = document.querySelector(`.desexp${counter}`);
  livePreview.textContent = input ? input.value : "";
}
let eduCounter = 1;
function addEdu() {
  eduCounter++; // Increment the counter for each new Education entry
  const container = document.querySelector(".edu");
  const newEdu = document.createElement("div");
  newEdu.classList.add("edubox");
  newEdu.setAttribute("id", `edubox${eduCounter}`); // Assign a unique ID

  newEdu.innerHTML = `
    <div class="column">
      <div class="about">
        <label class="item">Institute</label>
        <input type="text" class="item eduinst${eduCounter}" placeholder="e.g., Harvard University" oninput="updateInstitute(${eduCounter})" />
      </div>
      <div class="about">
        <label class="item">Course Name</label>
        <input type="text" class="item educourse${eduCounter}" placeholder="e.g., Computer Science" oninput="updateCourse(${eduCounter})" />
      </div>
      <div class="about">
        <label class="item">Location</label>
        <input type="text" class="item edulocation${eduCounter}" placeholder="e.g., Cambridge, MA" oninput="updateLocation(${eduCounter})" />
      </div>
    </div>

    <div class="column">
      <div class="about">
        <label class="item">Start Date</label>
        <input type="date" class="item edujoin${eduCounter}" oninput="updateJoinDate(${eduCounter})" />
      </div>
      <div class="about">
        <label class="item">End Date</label>
        <input type="date" class="item eduend${eduCounter}" oninput="updateLeaveDate(${eduCounter})" />
      </div>
      <div class="about">
        <label class="item">Description</label>
        <input type="text" class="item edudes${eduCounter}" placeholder="e.g., Graduated with Honors" oninput="updateDescription(${eduCounter})" />
      </div>
    </div>

    <button type="button" class="remove-btn right" onclick="removeEducation(eduCounter)">-</button>
  `;

  container.insertBefore(newEdu, container.lastElementChild);
}
function removeEducation(counter) {
  // Remove the education input section
  const eduBox = document.getElementById(`edubox${counter}`);
  if (eduBox) {
    eduBox.remove();
  }

  // Clear the corresponding live preview elements
  const institutePreview = document.querySelector(`.instlive${counter}`);
  const coursePreview = document.querySelector(`.courselive${counter}`);
  const locationPreview = document.querySelector(`.locationlive${counter}`);
  const joinDatePreview = document.querySelector(`.joinlive${counter}`);
  const leaveDatePreview = document.querySelector(`.leavelive${counter}`);
  const descriptionPreview = document.querySelector(`.deslive${counter}`);

  if (institutePreview) institutePreview.textContent = "";
  if (coursePreview) coursePreview.textContent = "";
  if (locationPreview) locationPreview.textContent = "";
  if (joinDatePreview) joinDatePreview.textContent = "";
  if (leaveDatePreview) leaveDatePreview.textContent = "";
  if (descriptionPreview) descriptionPreview.textContent = "";
}
function updateInstitute(counter) {
  const input = document.querySelector(`.eduinst${counter}`);
  const livePreview = document.querySelector(`.instlive${counter}`);
  livePreview.textContent = input ? input.value : "";
}

function updateCourse(counter) {
  const input = document.querySelector(`.educourse${counter}`);
  const livePreview = document.querySelector(`.courselive${counter}`);
  livePreview.textContent = input ? input.value : "";
}

function updateLocation(counter) {
  const input = document.querySelector(`.edulocation${counter}`);
  const livePreview = document.querySelector(`.locationlive${counter}`);
  livePreview.textContent = input ? input.value : "";
}

function updateJoinDate(counter) {
  const input = document.querySelector(`.edujoin${counter}`);
  const livePreview = document.querySelector(`.joinlive${counter}`);
  livePreview.textContent = input ? input.value : "";
}

function updateLeaveDate(counter) {
  const input = document.querySelector(`.eduend${counter}`);
  const livePreview = document.querySelector(`.leavelive${counter}`);
  livePreview.textContent = input ? input.value : "";
}

function updateDescription(counter) {
  const input = document.querySelector(`.edudes${counter}`);
  const livePreview = document.querySelector(`.deslive${counter}`);
  livePreview.textContent = input ? input.value : "";
}
let projectCounter = 1;
function addPro() {
  const container = document.querySelector(".pro");
  const newPro = document.createElement("div");
  newPro.classList.add("procontainer");
  newPro.innerHTML = ` <div class="column">
          <div class="about" id="names">
            <label class="item">Project Title</label><input type="text" class="item  projectinput${projectCounter}" placeholder="eg. Shubham" />
          </div>
          <div class="about">
            <label class="item"> Project Link</label><input type="text" class="item projectinput${projectCounter}" placeholder="eg.link " />
          </div>
          <div class="about">
            <label class="item">Description</label><input type="text" class="item projectinput${projectCounter}" placeholder="eg. Description" />
          </div>
        </div>
        <button type="button" class="remove-btn right" onclick="removeAchievement(this)">-</button>
        `;
  container.insertBefore(newPro, container.lastElementChild);
}
//for about section
const inputboxes = document.querySelectorAll(".inputboxes");
const aboutitem = document.querySelectorAll(".aboutitem");
for (let i = 0; i < inputboxes.length; i++) {
  inputboxes[i].addEventListener("input", function () {
    if (i === 3) {
      return;
    }
    aboutitem[i].textContent = inputboxes[i].value;
  });
}
const imageprofile = document.querySelector(".imageprofile");
inputboxes[3].addEventListener("change", function () {
  if (inputboxes[3].files.length !== 0) {
    const file = inputboxes[3].files[0];
    const url = window.URL.createObjectURL(file);
    imageprofile.src = url;
    imageprofile.style.display = "block";
  }
});
//for skill section

function removeSkill(btn) {
  const element = btn.parentElement;
  const input = element.querySelector("input");

  // Get the skill number from the input class name (e.g., inputskill2)
  const skillNumber = input.classList[1].replace("inputskill", "");

  // Clear the corresponding skill in live preview
  document.querySelector(`.skillitem${skillNumber}`).textContent = "";

  // Remove the input element
  element.remove();
}

// Function to update live preview
function updateskill(skillNumber = 1) {
  // Select the input field based on the skill number
  const input = document.querySelector(`.inputskill${skillNumber}`);

  // Get the value entered in the input
  const skillValue = input ? input.value : "";

  // Update the corresponding skill item in live preview
  const skillPreview = document.querySelector(`.skillitem${skillNumber}`);

  if (skillPreview) {
    skillPreview.textContent = skillValue;
  }
}

//function for the Achievement
