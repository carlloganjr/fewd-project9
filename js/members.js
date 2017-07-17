$('document').ready(function() {

  $.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name,email,picture&noinfo',
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      let memberLIST = '<h2 class="sectionTitle">NEW MEMBER</h2>';
      memberLIST += '<ul class="new-members">';

      let activityLIST = '<h2 class="sectionTitle">RECENT ACTIVITY</h2>';
      activityLIST += '<ul class="new-activity">';


      for(let i = 0; i < data.results.length; i += 1) {
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let photo = data.results[i].picture.thumbnail;
        let email = data.results[i].email;

        //create list for new members
        memberLIST += '<li class="member-list">';
        memberLIST += '<img src="' + photo + '" alt="user photo" class="userPhoto">';
        memberLIST += '<span class="user-name">' + firstName + ' ' + lastName + '</span>';
        memberLIST += '<time>7/16/17</time>';
        memberLIST += '<a href="mailto:' + email + '">' + email + '</a>';
        memberLIST += '</li>';

        //create list for recent activity
        activityLIST += '<li class="member-list">';
        activityLIST += '<img src="' + photo + '" alt="user photo" class="userPhoto">';
        activityLIST += '<span class="activity">' + firstName + ' ' + lastName +
        ' liked YourApp\'s post</span>';
        activityLIST += '<span>37 minutes ago</span>';
        activityLIST += '<span class="arrow">></span>';
        activityLIST += '</li>';

      }; //end for loop

        memberLIST += '</ul>';
        document.getElementById('newMembers').innerHTML = memberLIST;

        activityLIST += '</ul>';
        document.getElementById('recentActive').innerHTML = activityLIST;

    } //end success function
  }); //end ajax request
}); // end document ready
