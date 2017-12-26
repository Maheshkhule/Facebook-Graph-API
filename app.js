 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    /*---------myFacebookToken gives this fields=name,email,hometown---------*/
    /*----------here we adding fields in the token itself--------------------*/
    var myFacebookToken = 'EAAQnEOkPlp4BAD8lioPpWusH1mYpXeDsBYlnsMQa9by97KPqXfoTMP1KxXxPJQzt4fpJvXnYLEbxzXRHW8ZCyRAjOli3fxSuWLLHzH7ofafQyZC3ivy46fdsEWkpxRNcb5eaK9QdATDOwkAQG66R7WDquy6tcZD&fields=name,email,hometown';

    /*---------getFacebookInfo function--------------------------------------*/
    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                   	console.log(response);
                    console.log(typeof(response));
                    $("#myName").text(response.name);
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name); 
                }
            }//end argument list 

        );// end ajax call 

    }// end get facebook info

    /*---------myPostToken gives this fields=post---------*/
    /*----------here we adding field- posts in the token itself--------------------*/
    var myPostToken = 'EAAQnEOkPlp4BAD8lioPpWusH1mYpXeDsBYlnsMQa9by97KPqXfoTMP1KxXxPJQzt4fpJvXnYLEbxzXRHW8ZCyRAjOli3fxSuWLLHzH7ofafQyZC3ivy46fdsEWkpxRNcb5eaK9QdATDOwkAQG66R7WDquy6tcZD&fields=posts';
    
     /*---------getPostInfo function--------------------------------------*/
    function getPostsInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myPostToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myPosts").text(response.posts.data[0].story);
                    $("#myPosts2").text(response.posts.data[1].message);
                    $("#myPosts3").text(response.posts.data[2].message);
                     $("#myPosts4").text(response.posts.data[3].message);
                    $("#myPosts5").text(response.posts.data[4].story);
                }
            }//end argument list 

        );// end ajax call 

    }// end get facebook info

    /*--------getFacebookInfo and getPostInfo function calling----------*/
    $("#facebookBtn").on('click',getFacebookInfo)
    $("#postsBtn").on('click',getPostsInfo)

  });
  /*--------end (document).ready(function)-----------------------------*/