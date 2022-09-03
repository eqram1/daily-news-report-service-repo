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
<div class="card p-1 h-10">
 <img src="${report.image_url}" class="card-img-top" alt="...">
                        <div class="card-body" style="width: 18rem;">
                            <h5 class="card-title">${report.title}</h5>
                            <p class="card-text">From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the 
                            best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer roundup.
                            From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the 
best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer roundup.
</p>
                        </div>
                        <div class="card-footer">
        <small class="text-muted">Author image-${report.img}Author name-${report.name} ,Total view ${report.total_view}</small>
      </div >
                    </div >
    `;
        reportsContainer.appendChild(reportDiv);
    })
}

loadReports();

