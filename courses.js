function fetchdata() {
    fetch("http://localhost:3000/product")
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        }).then(data => {
            console.log(data.data);
            const html = data.data.map(course => {
                return `
                    <div class="col-lg-3 col-sm-6 col-xs-12 col-xl-3">
                        <div class="card-hero">
                            <img src="./upload/images/cs50.jpg" class="w-100" alt="${course.courseName}">
                        </div>
                        <div class="partner-logo-wrapper">
                            <img src="./upload/images/harvard.png" class="partner-log" alt="${course.courseName}">
                        </div>    
                        <div class="wrapper">
                            <h2 class="course-name">${course.courseName}</h2>
                            <p class="provider">${course.providerName}</p>
                            <div class="course-date">
                                <p><small>Start Date: ${course.startDate}</small></p>
                                <p><small>End Date: ${course.endDate}</small></p>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");
            console.log(html);
            document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
        }).catch(error => {
            console.log(error);
        });
}
fetchdata();