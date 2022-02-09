"use strict";
const grid = document.querySelector(".job-grid");

//* Gets All the Job Data
async function getAllJobData() {
  const res = await fetch("src/data.json");
  const data = await res.json();
  generateTemplate(data);
  return data;
}
function generateTemplate(data) {
  grid.innerHTML = "";
  let cardHTML = "";
  for (let i = 0; i < 12; i++) {
    const currJob = data[i];
    const templateCard = `
    <div class="job-grid__card">

      <figure class="job-grid__card-logo" style="background-color:${currJob.logoBackground};">
        <img class="" src="${currJob.logo}" alt="" />
      </figure>

      <div class="job-grid__card-content">
        <span class="job-grid__card-posted">${currJob.postedAt} . </span>
        <span class="job-grid__card-type">${currJob.contract}</span>
        <h2 class="job-grid__card-title">${currJob.position}</h2>
        <span class="job-grid__card-company">${currJob.company}</span>
        <span class="job-grid__card-location">${currJob.location}</span>
      </div>

    </div>
    `;
    cardHTML += templateCard;
  }
  grid.insertAdjacentHTML("afterbegin", cardHTML);
}

getAllJobData();
