$(document).ready(function () {
  $('body').on('click', '.approve', function () {
    var id = $(this).attr('id');
    $.ajax({
      type: 'GET',
      url: '/api/admin/approve/' + id
    }).then(function (data) {
      console.log(data);
      //alert("Posts Approved");
      location.reload();
    });

  });

  $('body').on('click', '.delete', function () {
    var id = $(this).attr('id');
    $.ajax({
      type: 'GET',
      url: '/api/admin/delete/' + id
    }).then(function (data) {
      console.log(data);
      //alert("Posts Deleted");
      location.reload();
    });
  });
});


