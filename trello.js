var arr = [
	{
		picture : "pictures/anna.jpg",
		name: "Shawn Garner",
		username:"@onlydesign",
		numTasks: 68
	},
	{		
		picture : "http://bit.ly/2q4Mm3k",
		name: "Mathew Carron",
		username:"@mathew",
		numTasks: 0
	},
	{		
		picture : "pictures/anna.jpg",
		name: "Leona Curtis",
		username: "@norules",
		numTasks: 34
	},
	{	
		picture : "pictures/anna.jpg",
		name: "Alta Black",
		username: "@altablack",
		numTasks: 74
	},
	{		
		picture : "pictures/anna.jpg",
		name: "Abbie Roy",
		username:"@abbie",
		numTasks: 0
	},
	{	
		picture : "http://bit.ly/2r3NRga",
		name: "Juan Bennett",
		username: "@bennet",
		numTasks: 0
	},
	{
		picture : "http://bit.ly/2q4QgsV",
		name: "Shawn Garner",
		username: "@onlydesign",
		numTasks: 68
	}
];

var $addNewMember = $('.addNewMember')
var $jModal = $('#jModal');
var $close = $('.close');
var $team = $('#team');
var $classTeamMember = $('div.teamMember');
var $profilePic = $('<div class="profilePic"></div>');
var $img = $('<img>');
var $profileName = $('<div class="profileName"</div>');
var $fullName = $('<p class="fullName"></p>');
var $username = $('<p class="username"></p>');
var $editing = $('<div class="editing"></div');
var $faPencil = $('<i class="fa fa-pencil" aria-hidden="true"></i>')
var $faBellO = $('<i class="fa fa-bell-o" aria-hidden="true"></i>')
var $faTrashO = $('<i class="fa fa-trash-o" aria-hidden="true"></i>')
var $status = $('<div class="status"></div');
var $graph = $('<div class="graph">Progress</div>');
var $tasks = $('<div class="tasks"></div>');
var $taskNumber = $('<div class="taskNumber"></div>');
var $numTasks = $('<p class="numTasks"><span>68</span></p><p>Open Tasks</p>');
var $details = $('<div class="details"></div>');
var $cards = $('<div class="cards"><p><i class="fa fa-th-large" aria-hidden="true"></i> CARDS</p></div>');
var $profileInfo = $('<div class="profileInfo"><p><i class="fa fa-user-o" aria-hidden="true"></i> PROFILE</p></div>')

$addNewMember.on('click', function(){
	$jModal.css('display', 'block');
});
$close.on('click', function(){
	$jModal.css('display','none');
})

for(var i=0; i<arr.length; i++){
	var $teamMember = $('<div class="teamMember"></div>');
	$team.prepend($teamMember);		
	$teamMember.append($profilePic).append($profileName).append($editing).append($status).append($details);
	$profilePic.append($img);
	$img.attr('src', arr[i].picture);
	$profileName.append($fullName).append($username);
	$('.fullName').html(arr[i].name);
	$('.username').html(arr[i].username);
	$editing.append($faPencil).append($faBellO).append($faTrashO);
	$status.append($graph).append($tasks);
	$tasks.append($taskNumber);
	$taskNumber.append($numTasks);
	$('.numTasks span').html(arr[i].numTasks);
	$details.append($cards).append($profileInfo);
}
// for(var i=0; i<arr.length;i++){
// 	var $classTeamMember = $('.teamMember')[i];
// 	console.log($classTeamMember.append($profilePic));
// 	console.log($profilePic);
// 	// $classTeamMember.append($profileName);
// 	// $classTeamMember.append($editing);
// 	// $classTeamMember.append($status)
// 	// $classTeamMember.append($details);
// 	$profilePic.append($img);
// 	$img.attr('src', arr[i].picture);
// 	$profileName.append($fullName).append($username);
// 	$('.fullName').html(arr[i].name);
// 	$('.username').html(arr[i].username);
// 	$editing.append($faPencil).append($faBellO).append($faTrashO);
// 	$status.append($graph).append($tasks);
// 	$tasks.append($taskNumber);
// 	$taskNumber.append($numTasks);
// 	$('.numTasks span').html(arr[i].numTasks);
// 	$details.append($cards).append($profileInfo);
// }

// arr.forEach(function(arr2, index){
// 	$teamMember.append($profilePic).append($profileName).append($editing).append($status).append($details);
// 	$profilePic.append($img);
// 	$img.attr('src', arr2.picture);
// 	$profileName.append($fullName).append($username);
// 	$('.fullName').html(arr2.name);
// 	$('.username').html(arr2.username);
// 	$editing.append($faPencil).append($faBellO).append($faTrashO);
// 	$status.append($graph).append($tasks);
// 	$tasks.append($taskNumber);
// 	$taskNumber.append($numTasks);
// 	$('.numTasks span').html(arr2.numTasks);
// 	$details.append($cards).append($profileInfo);
// });