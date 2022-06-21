jQuery(document).ready(function () {
    $('.favorite').on('click',function(){
        let $this=$(this)
        tweetId=$this.data('tweetid')
        $.ajax({
            type: "post", //HTTP通信の種類
            url:'/favorites/store', //通信したいURL
            dataType: 'json',
            data:{
                "tweet_id":tweetId
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            }
        })
        .done((res)=>{
            document.getElementById('favorite-'+tweetId).style.display = 'none'
            document.getElementById('unfavorite-'+tweetId).style.display = 'inline'
            document.getElementById('favorite-count-'+tweetId).innerHTML =res['countFavorite']
        })
        .fail((error)=>{
        })
    });
    $('.unfavorite').on('click',function(){
        let $this=$(this)
        tweetId=$this.data('tweetid')
        $.ajax({
            type: "delete", //HTTP通信の種類
            url:'/favorites/destroy', //通信したいURL
            dataType: 'json',
            data:{
                'tweet_id':tweetId,
                '_method': 'DELETE'
            },
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            }
        })
        .done((res)=>{
            document.getElementById('favorite-'+tweetId).style.display = 'inline'
            document.getElementById('unfavorite-'+tweetId).style.display = 'none'
            document.getElementById('favorite-count-'+tweetId).innerHTML = res['countFavorite']
        })
        .fail((error)=>{
        })
    });
});
