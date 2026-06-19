function addTask() {

    let taskInput = document.getElementById("taskInput");
    let timeInput = document.getElementById("reminderTime");

    let task = taskInput.value.trim();
    let reminderTime = timeInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>
            ${task}
            <br>
            <small>Reminder: ${reminderTime || "Not Set"}</small>
        </span>
    `;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    // Reminder Logic (Today)
    if (reminderTime) {

        let now = new Date();

        let [hours, minutes] = reminderTime.split(":");

        let reminder = new Date();

        reminder.setHours(hours);
        reminder.setMinutes(minutes);
        reminder.setSeconds(0);

        // If selected time already passed today,
        // schedule for tomorrow
        if (reminder <= now) {
            reminder.setDate(reminder.getDate() + 1);
        }

        let delay = reminder.getTime() - now.getTime();

        setTimeout(() => {
            alert("⏰ Reminder!\n\nTask: " + task);
        }, delay);
    }

    taskInput.value = "";
    timeInput.value = "";
}