document.getElementById("seekerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userSkills = document.getElementById("skills").value.toLowerCase().split(",");
    
    let jobs = [
        { title: "டேட்டா எண்ட்ரி", skills: ["கம்ப்யூட்டர்", "எக்செல்"] },
        { title: "டெலிவரி ஓட்டுநர்", skills: ["பைக்", "ஓட்டுநர் உரிமம்"] },
        { title: "சமையல் உதவியாளர்", skills: ["சமையல்", "உணவு"] }
    ];
    
    let matchedJobs = jobs.filter(job => job.skills.some(skill => userSkills.includes(skill)));
    
    let jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    matchedJobs.forEach(job => {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = job.title;
        jobList.appendChild(li);
    });

    if (matchedJobs.length === 0) {
        jobList.innerHTML = "<li class='list-group-item text-danger'>வேலைகள் கிடைக்கவில்லை</li>";
    }
});