const loadReports = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayReports(data.data);
}

const displayReports = reports => {
    const reportsContainer = document.getElementById('report-container');
    reports.forEach(report => {
        const reportDiv = document.createElement('div');
        reportDiv.classList.add('rows');
        reportDiv.innerHTML = `
<div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
`;
        reportsContainer.appendChild(reportDiv);
    })
}

loadReports();

