const loadReports = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayReports(data.reports));
}

const displayReports = reports => {
    const reportsContainer = document.getElementById('report-container');
    reports.forEach(report => {
        console.log(report);
    });
}
loadReports();