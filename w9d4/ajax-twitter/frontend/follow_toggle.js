class FollowToggle {

    constructor(el){
        this.$el = el
        this.userId = this.$el.data("user-id")
        this.followState = this.$el.data("initial-follow-state")
        this.render()
        this.$el.on("click", (event) => {
            event.preventDefault();
            this.handleClick();
        })

    }

    render(){
        if (this.followState === "unfollowed"){
            this.$el.text("Follow")
        } else {
            this.$el.text("Unfollow!")
        }
    }

    handleClick() {
        let methodType = "";
        if (this.followState === "followed"){
            methodType = "delete"
            this.followState = "unfollowed"
        } else {
            methodType = "post"
            this.followState = "followed"
        }

        return $.ajax({
            method: `${methodType}`,
            url: `/users/${this.userId}/follow`,
            dataType: "json"
        }).then(function(){
            this.render();
        })
    }

}

module.exports = FollowToggle;
