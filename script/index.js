var movies = {
		movies:[
		{
			id:0,
			name:"Oz",
			img:"/img/Oz.jpg",
		},
		{
			id:1,
			name:"Life",
			img:"/img/Life.jpg",
		},
		{
			id:2,
			name:"Adventure time",
			img:"/img/adventure_time.jpg",
		},
		{
			id:3,
			name:"Dekalog",
			img:"/img/Dekalog.jpg",
		},
		{
			id:4,
			name:"Firefly",
			img:"/img/Firefly.jpg",
		},
		{
			id:5,
			name:"rick_morty",
			img:"/img/rick_morty.jpg",
		},
		{
			id:6,
			name:"Sherlock",
			img:"/img/Sherlock.jpg",
		},
		{
			id:7,
			name:"Sopranos",
			img:"/img/Sopranos.jpg",
		},
		{
			id:8,
			name:"Narcos",
			img:"/img/Narcos.jpg",
		},
		{
			id:9,
			name:"Seinfeld",
			img:"/img/Seinfeld.jpg",
		},
		{
			id:10,
			name:"Friends",
			img:"/img/Friends.jpg",
		},
		{
			id:11,
			name:"Rome",
			img:"/img/Rome.jpg",
		}

	]
}

var my_movies_list = [];

$(document).ready(function() {
	initialization();
});

// init the page
function initialization(){
	movies_init();	
	movie_add_btn_init();
}

// create movie list from data defined in movies
function movies_init () {
	$.each(movies.movies, function(index, value){
		var template = $('.movie_item-template').clone();
		template.removeClass('movie_item-template');
		template.addClass('movie_item');

		
		template.find('.js-add_movie').val(index);
		template.find('.js-poster').attr("src",value.img);
		template.find('.js-title_text').text(value.name);

		$('.movies_container').append(template);
	});
}

function movie_add_btn_init(){
	$('.movies_container').on('click','.add_btn',function(event){
		
		// is not in the list yet
		if($(this).attr('added') == "false"){
			my_movies_list.push(parseInt($(this).val()));
			$(this).attr('added',"true");
		}
		else{
			my_movies_list = remove_item(my_movies_list, parseInt($(this).val()));
			$(this).attr('added',"false");
		}
	})
}


// remove items from js array
function remove_item(array, item){
	var index = array.indexOf(item);
	if (index > -1) {
		array.splice(index, 1);
	}
	return array;
}


