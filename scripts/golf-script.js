$(function () {
  console.log("ready!");

  $.each(golfGames, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-3 mx-auto mt-4">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].game} </h2>
          <div class="card-body"> ${golfGames[index].author}</h3></div>
          <div class="card-footer">
            <a class="btn btn-primary" href="${golfGames[index].url}" target="_blank">Enjoy the Game!</a>
          </div>
        </div>
      </div>
      `);
  });
});
