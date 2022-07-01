// Here is the javascript file. All you need to do is to change the names of the images paths and texts where a mark will be put - so don't worry too much :)


// Here is the loader that appears before the page si loaded completly 
document.onreadystatechange = function () {
    if(document.readyState === "complete"){
        document.getElementById("loader").style.opacity = "0";
        document.getElementsByTagName("main")[0].style.opacity = "1";
    }
}


// ============== Smooth Scrolling ============== // 
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
    
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
});


// First thing we need to do is to reload the page everytime its width changes 
old_width = window.innerWidth;
window.onresize = function() { 
    new_width = window.innerWidth;
    if(Math.abs(old_width - new_width) >= 10) {
        old_width = new_width;
        setTimeout(function(){
            window.location.reload();
        });
    }
}


/// SECTION1: landing page /// 

    /// we gotta do the landing page carousel: the 4 big actual images that will create a slideshow 
    /// CAREFUL! Make sure all images are the same size (width and height) - you can resize them by cutting them in a photo editor app 

    var number_of_landing_images = 4; /// change here if with as many images you want 
                                      /// but be careful to add the files in the "images" folder (ex: landing5.jpg, landing6.jpg, etc.)
    var actual_photo_id = 1; 
    setInterval(function() {
        actual_photo_id++;
        if(actual_photo_id > number_of_landing_images) actual_photo_id = 1;

        for(i = 1; i <= 4; i++) {
            document.getElementById("actual_image_inside" + i).style.opacity = 0;
        }
        document.getElementById("actual_image_inside" + actual_photo_id).style.opacity = 1;
        
        last_photo_id = actual_photo_id - 1;
        if(last_photo_id == 0)last_photo_id = number_of_landing_images;
        document.getElementById("circle" + last_photo_id).style.backgroundColor = "transparent";
        document.getElementById("circle" + actual_photo_id).style.backgroundColor = "#ffffff";
    }, 7000);


/// SECTION2: our history /// 
    var macaroons_width = document.getElementById("macaroons").offsetWidth;
    if(macaroons_width >= 850) {
        document.getElementById("macaroons").style.left = "calc(875px + 2rem + (100% - 1741px)/2)";
    }


/// SECTION3: our provider /// 
    document.getElementById("under_image_text").style.top = document.getElementById("provider_actual_image").offsetHeight + "px";


/// SECTION4: new products ///
    document.getElementById("new_products").style.minHeight = document.getElementById("coffee_product_img0").offsetWidth * 2 + "px";
    document.getElementById("coffee_product").style.height = document.getElementById("coffee_product_img0").offsetWidth * 2 + "px";

    var number_of_products = 4; /// change here if you want more weekly products
    var id_product = 1;
    var click_counter = 0;

    /// Here are the texts you want to change 
    var product_name = [
        'Sweety <br> Pumpkin Pie',
        'Liqior <br> Sober Drink',
        'Deadly <br> Choco Loco',
        'Coconut <br> Endless Taste'
        // Add more like this if you have more than 4 products 
        // Be careful to put a comma after each one EXCEPT the last one 
        // ALSO: if you want a new line (to wrap the title in 2 lines for example), add "<br>" like in the examples above
    ];

    var numeric_values = [
        '<h1>200 ml</h1> <h1>245</h1> <h1>30 g</h1> <h1>0.9 g</h1> <h1>15 g</h1>', 
        '<h1>125 ml</h1> <h1>200</h1> <h1>15 g</h1> <h1>0.7 g</h1> <h1>5 g</h1>', 
        '<h1>250 ml</h1> <h1>545</h1> <h1>80 g</h1> <h1>5 g</h1> <h1>10 g</h1>', 
        '<h1>150 ml</h1> <h1>200</h1> <h1>25 g</h1> <h1>3.2 g</h1> <h1>6 g</h1>'
        // Add more like this if you have more than 4 products 
        // Be careful to put a comma after each row EXCEPT the last one 
        // A new line must have the same syntax. Change only the numeric values. 
        // Don't delete the "<h1> </h1>", where your numeric values should be /
    ];

    function newProduct(sign) {
        click_counter ++;

        old_id_product = id_product;
        id_product += sign;
        if (id_product == 0)id_product = number_of_products;
        if (id_product > number_of_products)id_product = 1;

        /// Here are some comments for the actual code. Not important if you don't want to change the functionality of the page 

            /// Make it work for the big products images 
            var new_img = document.createElement("img"); // created new image 
            new_img.src = "images/coffee" + id_product + ".png"; // give it the source code 
            console.log(document.getElementById("coffee_product").offsetWidth);
            new_img.id = "coffee_product_img" + click_counter; // add an id for later deletion 
        
            if(sign == +1) new_img.classList.add("appear_coffee_product_left"); // give the class that gives the correct animation 
            else new_img.classList.add("appear_coffee_product_right"); // give the class that gives the correct animation

            document.getElementById("coffee_product").appendChild(new_img); // append it to the parent division "coffee_product"

            /// Edit the element that will disappear 
            document.getElementById("coffee_product_img" + (click_counter - 1)).className = "";
            if(sign == 1)document.getElementById("coffee_product_img" + (click_counter - 1)).classList.add("hide_coffee_product_left");
            else document.getElementById("coffee_product_img" + (click_counter - 1)).classList.add("hide_coffee_product_right");
            document.getElementById("coffee_product_img" + (click_counter - 1)).style.opacity = 0;
            document.getElementById("coffee_product_img" + (click_counter - 1)).style.position = "absolute";
            document.getElementById("coffee_product_img" + (click_counter - 1)).style.top = "50%";

            /// For efficiency delete the element which was created two times ago 
            if(click_counter >= 2) 
            {   
                //document.getElementById("coffee_product_img" + (click_counter - 2)).remove();
                document.getElementById("coffee_product").removeChild(document.getElementById("coffee_product_img" + (click_counter - 2)));
            }
            // ------------------------------------------------------------------------------------------------------------------------------------ // 

            /// Make it work for the counter 
            document.getElementById("counter" + old_id_product).style.transform = "scale(1,1)";
            document.getElementById("counter" + id_product).style.transform = "scale(2,2)";

            // ------------------------------------------------------------------------------------------------------------------------------------ // 

            /// Make it work for the title and info 
            document.getElementById("product_name_header").innerHTML = product_name[id_product-1];
            document.getElementById("numeric_values").innerHTML = numeric_values[id_product-1];

            // ------------------------------------------------------------------------------------------------------------------------------------ // 

            /// Make it work for the next product 
            next_id_product = id_product + 1;
            if(next_id_product > number_of_products)next_id_product = 1;
            document.getElementById("coming_up_image").src = "images/coffee" + next_id_product + ".png";    
    }


/// SECTION5: Testimonials ///

    /// Here you can change the texts as you wish
    var number_of_testimonials = 4; /// put as many as you want 

    /// Here is the content of the review 
    var testimonials_text = [
        'Lorem ips1um dolor, sit amet consectetur adipisicing elit. Voluptatem reprehenderit deleniti eos alias ex consectetur obcaecati doloremque dolorum? Nam corporis saepe temporibus fugiat sequi in unde, maiores labore minima odit, enim, reiciendis quis sapiente quas voluptatum sed esse obcaecati nemo. Veritatis nulla illo inventore deserunt sapiente. Harum unde inventore natus?',
        'Lorem ips2um dolor, sit amet consectetur adipisicing elit. Voluptatem reprehenderit deleniti eos alias ex consectetur obcaecati doloremque dolorum? Nam corporis saepe temporibus fugiat sequi in unde, maiores labore minima odit, enim, reiciendis quis sapiente quas voluptatum sed esse obcaecati nemo. Veritatis nulla illo inventore deserunt sapiente. Harum unde inventore natus?',
        'Lorem ips3um dolor, sit amet consectetur adipisicing elit. Voluptatem reprehenderit deleniti eos alias ex consectetur obcaecati doloremque dolorum? Nam corporis saepe temporibus fugiat sequi in unde, maiores labore minima odit, enim, reiciendis quis sapiente quas voluptatum sed esse obcaecati nemo. Veritatis nulla illo inventore deserunt sapiente. Harum unde inventore natus?',
        'Lorem ips4um dolor, sit amet consectett deleniti eos alias ex consectetur obcaecati doloremque dolorum? Nam corporis saepe temporibus fugiat sequi in unde, maiores labore minima odit, enim, reiciendis quis sapiente quas voluptatum sed esse obcaecati nemo. Veritatis nulla illo inventore deserunt sapiente. Harum unde inventore natus?',
        // If you want to add more just put the message in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];

    /// Here is the name of the person who made the review 
    var testimonials_names = [
        'Josh Dave', 
        'Steve Alex',
        'Robs Mcclain',
        'Alexia Carter'
        // If you want to add more just put the name in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];

    /// Here is the job / poisiton in industry of the person who made the review 
    var  testimonials_jobs = [
        '@director at CompanyTL', 
        '@employee at A-yacht.SRL',
        '@employee at MicrosoftyInc',
        '@manager at CHOOSEdesign'
        // If you want to add more just put the text in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];

    /// Here is the coding part (don't worry too much about this)
    var reviewID = 1;

    if (document.getElementsByTagName('body')[0].offsetWidth > 1000) animation_seconds = 750;
    else animation_seconds = 500;

    function nextReview() {  
        reviewID ++; 
        if(reviewID > number_of_testimonials)reviewID = 1;

        next_reviewID = reviewID + 1;
        if(next_reviewID > number_of_testimonials)next_reviewID = 1;

        setTimeout(function(){
            document.getElementById("current_review_p").innerHTML = testimonials_text[reviewID - 1];
            document.getElementById("current_review_name").innerHTML = testimonials_names[reviewID - 1];
            document.getElementById("current_review_job").innerHTML = testimonials_jobs[reviewID - 1];
            document.getElementById("next_review_p").innerHTML = testimonials_text[next_reviewID - 1]; 
        }, animation_seconds - 250);
        
        document.getElementById("next_review_cover").style.display = "block";
    
        /// animate the effect 
        setTimeout(function(){
            document.getElementById("animate_review_div").className = ""; 
            document.getElementById("next_review_cover").style.display = "none";
        }, animation_seconds);
        document.getElementById("animate_review_div").classList.add("animate_review");
    }


/// SECTION7: Get In Touch ///
    document.getElementById("image_box").style.width = document.getElementById("colored_cake").offsetWidth + "px";
    document.getElementById("content").style.width = "calc(100% - " + document.getElementById("image_box").offsetWidth + "px)";


/// SECTION8: Locations /// 
    var number_of_locations = 4; /// change with as many as you want 
    var location_titles = [
        'Bolton',
        'Manchaster',
        'Rochdale', 
        'Huddersfield'
        // If you want to add more just put the text in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];
    var location_actual_location = [
        'Bolton, 42 Thames Street',
        'Manchaster, 90 Cunnery Rd',
        'Rochdale, 42 Thames Street', 
        'Huddersfield, 90 Cunnery Rd'
        // If you want to add more just put the text in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];
    var location_phone_number = [
        '078 8348 9826',
        '079 3472 1165',
        '078 8348 9826', 
        '079 3472 1165'
        // If you want to add more just put the text in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];
    var location_facebook = [
        '@Éveiller_Bolton',
        '@Éveiller_Manchaster',
        '@Éveiller_Rochdale',
        '@Éveiller_Huddersfield'
        // If you want to add more just put the text in ''. 
        // Be careful to put a comma after each row EXCEPT the last one 
    ];

    // Here comes the coding part 
    var first_location_id = 1;
    var second_location_id = 2;
    function next_footer_location() {

        first_location_id ++;
        second_location_id ++; 
        if(first_location_id > number_of_locations) first_location_id = 1;
        if(second_location_id > number_of_locations) second_location_id = 1;

        document.getElementById("first_location_title").innerHTML = location_titles[first_location_id - 1];
        document.getElementById("first_location_address").innerHTML = location_actual_location[first_location_id - 1];
        document.getElementById("first_location_phone").innerHTML = location_phone_number[first_location_id - 1];
        document.getElementById("first_location_facebook").innerHTML = location_facebook[first_location_id - 1];

        document.getElementById("second_location_title").innerHTML = location_titles[second_location_id - 1];
        document.getElementById("second_location_address").innerHTML = location_actual_location[second_location_id - 1];
        document.getElementById("second_location_phone").innerHTML = location_phone_number[second_location_id - 1];
        document.getElementById("second_location_facebook").innerHTML = location_facebook[second_location_id - 1];
    }


/// SECTION10: The navbar ///
function openNav() {
    if(window.innerHeight > 560) {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("navbar_links").style.display = "flex";
        document.getElementById("close_button").style.display = "block";
        document.getElementById("navbar").style.height = "100vh";
    }
    else {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("tilt_screen").style.display = "block";
        document.getElementById("navbar").style.height = "100vh";
        document.getElementById("navbar_links").style.display = "none";
        document.getElementById("close_button").style.display = "block";
    }
}

function closeNav() {
    document.getElementById("navbar").style.height = "0";
    document.getElementById("navbar_links").style.display = "none";
    document.getElementById("close_button").style.display = "none";
    setTimeout(function(){
        document.getElementById("navbar").style.display = "none";
    }, 500);
}