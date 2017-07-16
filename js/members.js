$('document').ready(function() {

  $.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name,email,picture&noinfo',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      // let result = $.parseJSON(data);
      // console.log(firstName);
      let memberLIST = '<ul class="new-members">';
      for(let i = 0; i < data.results.length; i += 1) {
        let firstName = data.results[i].name.first;
        // console.log(firstName);
        let lastName = data.results[i].name.last;
        let photo = data.results[i].picture.thumbnail;
        let email = data.results[i].email;
        memberLIST += '<li class="member-list">';
        memberLIST += '<img src="' + photo + '" alt="user photo" class="userPhoto">';
        memberLIST += '<span class="user-name">' + firstName + ' ' + lastName + '</span>';
        memberLIST += '<a href="mailto:' + email + '">' + email + '</a>';
        memberLIST += '</li>';
      }; //end for loop
        memberLIST += '</ul>';
        document.getElementById('newMembers').innerHTML = memberLIST;
        // $('.newMembers').html(memberLIST);
    } //end success function
  }); //end ajax request
}); // end document ready

// $.ajax({
//   url: 'https://randomuser.me/api/?results=4&inc=name,email,picture',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });



// $(data).each(function() {
//   let firstName = data[1].name.first;
//   console.log(firstName);

// $.each(data, function(i) {
//   let firstName = data.results[i].name.first;
//   console.log(firstName);
