function reddenPage() {

    async function readResult(studentSetNo, studenttSpdid) {

        console.log("Code is started")
        const rcmbEaxm_Arrow = document.querySelector("#rcmbEaxm_Arrow");
        rcmbEaxm_Arrow.click();

        const items = document.querySelectorAll('.rcbItem');
        items.forEach(item => {
            if (item.textContent.trim() === 'B.Com. Semester - 4 (April - 2024)') {
                item.click();
            }
        });
        const setNO = document.querySelector("#txtSeatNo_text");
        setNO.click();
        setNO.focus();
        setNO.value = studentSetNo;

        const ortxtSPDID_text = document.querySelector("#rtxtSPDID_text");
        ortxtSPDID_text.click(); ortxtSPDID_text.focus(); ortxtSPDID_text.value = studenttSpdid;
        const submit = document.querySelector("#ibtnSubmit");
        submit.focus(); submit.click();
     
    }
    // async function readResult(studentSetNo, studenttSpdid) {
    //     // Helper function to introduce a delay
    //     const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    //     // Loop through the iterations asynchronously
    //     for (let i = 0; i <= 3; i++) {
    //         console.log("Code is started");
    //         const rcmbEaxm_Arrow = document.querySelector("#rcmbEaxm_Arrow");
    //         rcmbEaxm_Arrow.click();
    
    //         const items = document.querySelectorAll('.rcbItem');
    //         items.forEach(item => {
    //             if (item.textContent.trim() === 'B.Com. Semester - 4 (April - 2024)') {
    //                 item.click();
    //             }
    //         });
    
    //         const setNO = document.querySelector("#txtSeatNo_text");
    //         setNO.click();
    //         setNO.focus();
    //         setNO.value = studentSetNo + i;
    
    //         const ortxtSPDID_text = document.querySelector("#rtxtSPDID_text");
    //         ortxtSPDID_text.click();
    //         ortxtSPDID_text.focus();
    //         ortxtSPDID_text.value = studenttSpdid + i;
    
    //         const submit = document.querySelector("#ibtnSubmit");
    //         submit.focus();
    //         submit.click();
    //         alert("1")
    //         // Wait for 5 seconds before continuing to the next iteration
    //         await delay(5000);
    //         await alert("prabaht")

    //     }
    // }
    

    readResult(1275, 2022003103)


}

// function DataWrit() {
//     document.addEventListener("DOMContentLoaded", () => {
//         // Send a message to the content script to fetch tables
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             console.log(tabs[0].id)
//             chrome.scripting.executeScript({
//                 target: { tabId: tabs[0].id },
//                 function: getAllTables
//             }, (results) => {
//                 htmlElements(results[0].result[0]);
//                 if (results && results[0].result) {
//                     displayTables(results[0].result);
//                 }
//             });
//         });
//     });

//     // Function to display the tables in the popup
//     function displayTables(tables) {
//         const tableContainer = document.getElementById('table-container');

//         const tableElement = document.createElement('table');
//         tableElement.innerHTML = tables[4];
//         tableElement.classList.add('styled-table');
//         tableContainer.appendChild(tableElement);

//         //conver table to josn
//         const tablex = document.querySelector(".rgMasterTable");
//         const fistTable = document.querySelector("table");

//         const user = fistTable.children[0];
//         const resltRow = tablex.children[2].children.length;

//         const rowes = tablex.children[2]

//         const tr = rowes.children[0];
//         const tr1 = rowes.children[1];
//         const tr2 = rowes.children[2];
//         const tr3 = rowes.children[3];
//         const tr4 = rowes.children[4];
//         const tr5 = rowes.children[5];
//         const tr6 = rowes.children[6];
//         const tr7 = rowes.children[7];
//         const tr8 = rowes.children[8];

//         const userData = {
//             name: user.children[1].children[1].innerText,
//             enrollmentNo: user.children[2].children[1].innerText,
//             spdid: user.children[3].children[1].innerText,
//             subjectsAndMarks: []
//         };

//         for (i = 0; i <= 8; i++) {
//             userData.subjectsAndMarks.push({
//                 subjectCode: rowes.children[i].children[0].innerText,
//                 subject: rowes.children[i].children[1].innerText,
//                 external: rowes.children[i].children[2].innerText,
//                 internal: rowes.children[i].children[3].innerText
//             });
//         }
//         console.log(userData);
//         // postData()
//         // async function postData() {
//         //   try {
//         //     const response = await fetch('https://sgguresul.onrender.com/creat', {
//         //       method: 'POST',
//         //       headers: {
//         //         'Content-Type': 'application/json',
//         //       },
//         //       body: JSON.stringify(userData),
//         //     });

//         //     const data = await response.json();
//         //     console.log(data);
//         //   } catch (error) {
//         //     console.error('Error:', error);
//         //   }
//         // }

//     }

//     // Function to extract all tables (runs in content script context)
//     function getAllTables() {
//         const tables = document.querySelectorAll("html");
//         return Array.from(tables).map(table => table.outerHTML);
//     }

// }
chrome.action.onClicked.addListener((tab) => {
    console.log(tab);

    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: reddenPage
        });
    }

    // setTimeout(() => {
    //     let set1 = 1276; let spd1 = 202200314;

    //     if (!tab.url.includes('chrome://')) {
    //         chrome.scripting.executeScript({
    //             target: { tabId: tab.id },
    //             func: reddenPage
    //         });
    //     }
    //     console.log(set1, spd1)
    // }, 5000);
});