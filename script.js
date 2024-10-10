let achievementCounter = 1; // Track the number of achievement inputs

// Function to add a new achievement input field
function addAchievement() {
  achievementCounter++;

  const container = document.querySelector(".achieveform");
  const newAchievement = document.createElement("div");
  newAchievement.classList.add("achieveinput");
  const preview1 = document.querySelector(`.desitem${achievementCounter}`);
  const preview2 = document.querySelector(`.achieveitem${achievementCounter}`);
  preview1.classList.remove("hidden");
  preview2.classList.remove("hidden");
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
  const container = document.querySelector(".skillinput1");
  const newSkill = document.createElement("div");
  newSkill.classList.add("skillbox");
  newSkill.innerHTML = ` <label for="" class="item">Skill Name</label>
            <input type="text" list="skills-list" class="item inputskill${skillcounter}" placeholder="eg. Java" oninput="updateskill(skillcounter)" />
            <button type="button" class="remove-btn" onclick="removeSkill(this)">-</button>
  `;
  container.insertBefore(newSkill, container.lastElementChild);
}
let expcounter = 1;

function addExp() {
  expcounter++;
  const container = document.querySelector(".exp");
  const column = document.createElement("div");
  const preview1 = document.querySelector(`.titleexp${expcounter}`);
  const preview2 = document.querySelector(`.companyexp${expcounter}`);
  const preview3 = document.querySelector(`.locationexp${expcounter}`);
  const preview4 = document.querySelector(`.joinexp${expcounter}`);
  const preview5 = document.querySelector(`.leaveexp${expcounter}`);
  const preview6 = document.querySelector(`.desexp${expcounter}`);
  preview1.classList.remove("hidden");
  preview2.classList.remove("hidden");
  preview3.classList.remove("hidden");
  preview4.classList.remove("hidden");
  preview5.classList.remove("hidden");
  preview6.classList.remove("hidden");

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
        <input type="text" class="item explocation${expcounter}" placeholder="eg. Dombivli" oninput="updateLocation1(${expcounter})" />
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
        <input type="text" class="item expdes${expcounter}" placeholder="eg. Description" oninput="updateDescription1(${expcounter})" />
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
  console.log(input, livePreview); // This will log the input and live preview elements to check if they exist

  livePreview.textContent = input ? input.value : "";
}

// Function to update Location
function updateLocation1(counter) {
  console.log("HII");
  const input = document.querySelector(`.explocation${counter}`);
  const livePreview = document.querySelector(`.locationexp${counter}`);
  console.log(input, livePreview); // This will log the input and live preview elements to check if they exist

  livePreview.textContent = input ? input.value : "";
}

// Function to update Joining Date
function updateJoin(counter) {
  const input = document.querySelector(`.expjoin${counter}`);
  const livePreview = document.querySelector(`.joinexp${counter}`);
  livePreview.textContent = input ? input.value : "";
  const color = document.querySelector(`.colorss`).value;
  livePreview.style.backgroundColor = color ? color : "#fff";
  livePreview.style.color = "White";
}

// Function to update Leaving Date
function updateLeave(counter) {
  const input = document.querySelector(`.expleave${counter}`);
  const livePreview = document.querySelector(`.leaveexp${counter}`);
  livePreview.textContent = input ? input.value : "";
  const color = document.querySelector(`.colorss`).value;
  livePreview.style.backgroundColor = color ? color : "#fff";
  livePreview.style.color = "White";
}

// Function to update Description
function updateDescription1(counter) {
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
  const preview1 = document.querySelector(`.instlive${eduCounter}`);
  const preview2 = document.querySelector(`.courselive${eduCounter}`);
  const preview3 = document.querySelector(`.locationlive${eduCounter}`);
  const preview4 = document.querySelector(`.joinlive${eduCounter}`);
  const preview5 = document.querySelector(`.leavelive${eduCounter}`);
  const preview6 = document.querySelector(`.deslive${eduCounter}`);
  preview1.classList.remove("hidden");
  preview2.classList.remove("hidden");
  preview3.classList.remove("hidden");
  preview4.classList.remove("hidden");
  preview5.classList.remove("hidden");
  preview6.classList.remove("hidden");

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

    <button type="button" class="remove-btn right" onclick="removeEducation(${eduCounter})">-</button>
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
  const color = document.querySelector(`.colorss`).value;
  livePreview.style.backgroundColor = color ? color : "#fff";
  livePreview.style.color = "White";
}

function updateLeaveDate(counter) {
  const input = document.querySelector(`.eduend${counter}`);
  const livePreview = document.querySelector(`.leavelive${counter}`);
  livePreview.textContent = input ? input.value : "";
  const color = document.querySelector(`.colorss`).value;
  livePreview.style.backgroundColor = color ? color : "#fff";
  livePreview.style.color = "White";
}

function updateDescription(counter) {
  const input = document.querySelector(`.edudes${counter}`);
  const livePreview = document.querySelector(`.deslive${counter}`);
  livePreview.textContent = input ? input.value : "";
}
let projectCounter = 1;
function addPro() {
  projectCounter++;
  const container = document.querySelector(".projectors");
  const newPro = document.createElement("div");

  newPro.classList.add("procontainer");
  newPro.setAttribute("id", `proj${projectCounter}`);

  newPro.innerHTML = ` 
  <div class="column">
          <div class="about" id="names">
            <label class="item">Project Title</label><input type="text" class="item  projectinput${projectCounter}" placeholder="eg. Shubham"  oninput="updatePro(${projectCounter})"/>
          </div>
          <div class="about">
            <label class="item"> Project Link</label><input type="text" class="item linkinput${projectCounter}" placeholder="eg.link " oninput="updateLink(${projectCounter})"/>
          </div>
          <div class="about">
            <label class="item">Description</label><input type="text" class="item prodesinput${projectCounter}" placeholder="eg. Description" oninput="updateDespro(${projectCounter})"/>
          </div>
  </div>
  <button type="button" class="remove-btn right" onclick="removePro(${projectCounter})">-</button>

        `;
  console.log(container, newPro);
  container.insertBefore(newPro, container.lastElementChild);
}
function removePro(counter) {
  const container = document.querySelector(`#proj${counter}`);
  if (container) {
    container.remove();
  }
  const title = document.querySelector(`protitle${counter}`);
  const link = document.querySelector(`gitlink${counter}`);
  const desh = document.querySelector(`prodes${counter}`);
  if (title) title.textContent = "";
  if (link) link.textContent = "";
  if (desh) desh.textContent = "";
}
function updatePro(count) {
  const input = document.querySelector(`.projectinput${count}`);
  const preview = document.querySelector(`.protitle${count}`);
  preview.textContent = input ? input.value : "";
}
function updateLink(count) {
  const input = document.querySelector(`.linkinput${count}`);
  const preview = document.querySelector(`.gitlink${count}`);
  preview.textContent = input ? input.value : "";
}
function updateDespro(count) {
  const input = document.querySelector(`.prodesinput${count}`);
  const preview = document.querySelector(`.prodes${count}`);
  preview.textContent = input ? input.value : "";
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
function download() {
  const resume = document.querySelector(".live");
  html2pdf()
    .from(resume)
    .set({
      margin: 1,
      filename: "resume.pdf",
      html2canvas: { scale: 2 }, // Increase scale for better quality
      jsPDF: { orientation: "portrait" }, // Set orientation
    })
    .save();
}
function updatecolor() {
  const right = document.querySelector(".leftlive");
  const color = document.querySelector(".colorss").value;
  right.style.backgroundColor = color;
}
//function for the Achievement
