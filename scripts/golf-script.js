$(function () {
  console.log("ready!");

  $.each(golfGames, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-3 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].game} </h2>
          <div class="card-body">${golfGames[index].author}</div>
          <div class="card-footer">
            <a href="${golfGames[index].url}" target="_blank" class="btn btn-primary">game link</a>
          </div>
        </div>
      </div>
      `);
  });
});
