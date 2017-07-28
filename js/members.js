$('document').ready(function() {

  $.ajax({
    url: 'https://randomuser.me/api/?results=4&inc=name,email,picture&noinfo&nat=us',
    dataType: 'json',
    success: function(data) {
      // console.log(data);
      let memberLIST = '<h2 class="sectionTitle">NEW MEMBER</h2>';
      memberLIST += '<ul class="new-members">';

      let activityLIST = '<h2 class="sectionTitle">RECENT ACTIVITY</h2>';
      activityLIST += '<ul class="new-activity">';

      const dataList = document.getElementById('dataList');
      let listData = "";
      let createData = [];

      for(let i = 0; i < data.results.length; i += 1) {
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let photo = data.results[i].picture.thumbnail;
        let email = data.results[i].email;

        //create list for new members
        memberLIST += '<li class="member-list">';
        memberLIST += '<img src="' + photo + '" alt="user photo" class="userPhoto">';
        // memberLIST += '<div class="memb-div">';
        memberLIST += '<p class="user-name">' + firstName + ' ' + lastName + '</p>';
        memberLIST += '<a href="mailto:' + email + '">' + email + '</a><br>';
        // memberLIST += '</div>';
        memberLIST += '<time>7/16/17</time>';
        memberLIST += '</li>';

        //create list for recent activity
        activityLIST += '<li class="member-list">';
        activityLIST += '<img src="' + photo + '" alt="user photo" class="userPhoto">';
        activityLIST += '<p class="activity">' + firstName + ' ' + lastName +
        ' liked YourApp\'s post</p>';
        activityLIST += '<p class="active-time">37 minutes ago</p>';
        activityLIST += '<span class="arrow">></span>';
        activityLIST += '</li>';

        listData += '<option value="' + firstName + ' ' + lastName + '">';

      }; //end for loop

        memberLIST += '</ul>';
        document.getElementById('newMembers').innerHTML = memberLIST;

        activityLIST += '</ul>';
        document.getElementById('recentActive').innerHTML = activityLIST;

        dataList.innerHTML = listData;

    } //end success function
  }); //end ajax request
}); // end document ready
