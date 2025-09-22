const tasks = document.getElementsByClassName('completed');
// const tasks = document.getElementsByClassName('card-task');
// console.log(tasks);

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
// console.log(formattedDate);

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
    // console.log(randomNumber);
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
    // console.log(task);
    task.addEventListener('click', function(event){
        // console.log('clicked');
        // console.log(event.target.parentNode.parentNode);
        // console.log(event.target);
        let completeBtn = event.target;

        // let completeBtnClassList = completeBtn.classList;
        // console.log(completeBtnClassList);

        if(completeBtn.classList.contains('disabled')){
            return;
        }else{
            alert('Board updated successfully!!');
            completeBtn.classList.add('disabled');
            completeBtn.style.backgroundColor = 'gray';

            const elements = document.getElementsByClassName('card-task');
            // console.log(elements.length);
            let elementsLength =  elements.length;
            // console.log(elementsLength);

            count++;
            // console.log(count);  

            if(count === elementsLength){
                alert('Congrates!! You have completed all the current task');
            }

            // Task Assign Count (increment)
            let taskAssignCount = document.querySelector('#task-assign-count').innerText;
            let convertAssignCount = parseInt(taskAssignCount);
            let incrementAssignCount = convertAssignCount + 1;
            // console.log(incrementAssignCount);
            document.getElementById('task-assign-count').innerText = incrementAssignCount;

            // Task Count (increment)
            let taskCount = document.querySelector('#task-count').innerText;
            let convertCount = parseInt(taskCount);
            let incrementCount = convertCount + 1;
            // console.log(incrementCount);
            document.getElementById('task-count').innerText = incrementCount;

            // History (create)
            let historySection = document.querySelector('.activity-log');
            // console.log(historySection);

            let newHistory = document.createElement('small');

            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            const formattedTime = formatter.format(now);
            // console.log(formattedTime); // Example output: 09:49:15 PM

            let taskSection = event.target.parentNode.parentNode;
            let taskTitle = taskSection.querySelector('.task-title').innerText;
            // console.log(taskTitle);

            newHistory.innerHTML = `
            You have completed the task <b>${taskTitle}</b> at ${formattedTime}
            `;
            // console.log(newHistory);
            historySection.appendChild(newHistory);

        }
        
        // console.log(completeBtn.classList.contains('disabled'));
    });
}
