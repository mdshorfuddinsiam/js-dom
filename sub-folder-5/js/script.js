const tasks = document.getElementsByClassName('completed');

// ---------- Current Date ------------
function getFormattedDate() {
  const date = new Date();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
}

const formattedDate = getFormattedDate();

document.getElementById('task-date').innerText = formattedDate;
// -------------------------------------


// -------- Clear (History) ----------
document.querySelector('#clearBtn').addEventListener('click', function(event){
    event.preventDefault();
    let clearHistory = document.querySelector('.activity-log').innerHTML = '';
});
// -----------------------------------

// -------- Backgroud Color Change (Random) ----------
document.querySelector('#bgColorBtn').addEventListener('click', function(event){
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if(randomNumber === 1){
        document.body.style.backgroundColor = 'red';
    }
    if(randomNumber === 2){
        document.body.style.backgroundColor = 'green';
    }
    if(randomNumber === 3){
        document.body.style.backgroundColor = 'pink';
    }
    if(randomNumber === 4){
        document.body.style.backgroundColor = 'yellow';
    }
    if(randomNumber === 5){
        document.body.style.backgroundColor = 'black';
    }
    if(randomNumber === 6){
        document.body.style.backgroundColor = 'gray';
    }
    if(randomNumber === 7){
        document.body.style.backgroundColor = 'skyblue';
    }
    if(randomNumber === 8){
        document.body.style.backgroundColor = 'purple';
    }
    if(randomNumber === 9){
        document.body.style.backgroundColor = 'voilet';
    }
    if(randomNumber === 10){
        document.body.style.backgroundColor = 'tomato';
    }
});
// -----------------------------------

let count = 0;

for (const task of tasks){
    task.addEventListener('click', function(event){
        let completeBtn = event.target;

        if(completeBtn.classList.contains('disabled')){
            return;
        }else{
            alert('Board updated successfully!!');
            completeBtn.classList.add('disabled');
            completeBtn.style.backgroundColor = 'gray';

            const elements = document.getElementsByClassName('card-task');
            let elementsLength =  elements.length;

            count++;

            if(count === elementsLength){
                alert('Congrates!! You have completed all the current task');
            }

            // Task Assign Count (increment)
            let taskAssignCount = document.querySelector('#task-assign-count').innerText;
            let convertAssignCount = parseInt(taskAssignCount);
            let incrementAssignCount = convertAssignCount + 1;
            document.getElementById('task-assign-count').innerText = incrementAssignCount;

            // Task Count (increment)
            let taskCount = document.querySelector('#task-count').innerText;
            let convertCount = parseInt(taskCount);
            let incrementCount = convertCount + 1;
            document.getElementById('task-count').innerText = incrementCount;

            // History (create)
            let historySection = document.querySelector('.activity-log');

            let newHistory = document.createElement('small');

            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            const formattedTime = formatter.format(now);

            let taskSection = event.target.parentNode.parentNode;
            let taskTitle = taskSection.querySelector('.task-title').innerText;

            newHistory.innerHTML = `
            You have completed the task <b>${taskTitle}</b> at ${formattedTime}
            `;
            historySection.appendChild(newHistory);

        }
    });
}
