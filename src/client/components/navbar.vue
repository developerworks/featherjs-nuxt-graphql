<template>
    <nav class="nav has-shadow">
            <div class="nav-left">
                <nuxt-link to="/" class="nav-item">
                    <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDA4IDUxMi4wMDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDggNTEyLjAwODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6Izg2ODQ5MTsiIGQ9Ik0yODAuMDEsNDY0LjAwOGgtNDhjLTQuNDIyLDAtOCwzLjU3OC04LDh2OGMwLDE3LjY0OCwxNC4zNTIsMzIsMzIsMzJzMzItMTQuMzUyLDMyLTMydi04ICAgIEMyODguMDEsNDY3LjU4NiwyODQuNDMyLDQ2NC4wMDgsMjgwLjAxLDQ2NC4wMDh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojNUM1NDZBOyIgZD0iTTI1Ni4wMDIsNDY0LjAwOEgyMzIuMDFjLTQuNDIyLDAtOCwzLjU3OC04LDh2OGMwLDE3LjY0NiwxNC4zNDcsMzEuOTk1LDMxLjk5MiwzMS45OTkgICAgTDI1Ni4wMDIsNDY0LjAwOEwyNTYuMDAyLDQ2NC4wMDh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZDRDAwOyIgZD0iTTM4MS45ODMsNDkuODk1Yy0zNy4zOTEtMzUuMTQxLTg2LjM2Ny01Mi43NDItMTM3LjczNC00OS41MiAgICBDMTUwLjYzOSw2LjIsNzUuMDE0LDg0LjI4Niw3Mi4wOTIsMTc4LjE0OWMtMi4xNTYsNjkuNTQ3LDM0LjM3NSwxMzMuNTc4LDk1LjM0NCwxNjcuMTE3YzE1LjE1Niw4LjM0NCwyNC41NywyNC4zNjcsMjQuNTcsNDEuODI4ICAgIHY2MC45MTRjMCwxNy42NDgsMTQuMzUyLDMyLDMyLDMyaDY0YzE3LjY0OCwwLDMyLTE0LjM1MiwzMi0zMnYtNjAuOTE0YzAtMTcuNDQ1LDkuNDg0LTMzLjUwOCwyNC43NjYtNDEuOTMgICAgYzU4Ljc0Mi0zMi40MDYsOTUuMjM0LTk0LjE1Niw5NS4yMzQtMTYxLjE1NkM0NDAuMDA2LDEzMy40Myw0MTguODU4LDg0LjU0NywzODEuOTgzLDQ5Ljg5NXoiLz4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTY3MTsiIGN4PSIyNTYuMDAyIiBjeT0iMTg0LjAwOCIgcj0iMTI4Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yODMuOTg2LDIzMi4wMDhjLTEwLjYzMywwLTE2LjA3LTYuMjAzLTIwLjAzMS0xMC43MjdjLTMuNDkyLTMuOTg0LTQuODgzLTUuMjczLTgtNS4yNzMgICAgIGMtMy4xMDIsMC00LjQ4NCwxLjI4OS03Ljk2MSw1LjI2NmMtMy43MzQsNC4yNzMtOS4zODMsMTAuNzM0LTIwLjAxNiwxMC43MzRjLTEwLjYyNSwwLTE2LjI3My02LjQ2MS0yMC4wMDgtMTAuNzM0ICAgICBjLTMuNDc3LTMuOTc3LTQuODU5LTUuMjY2LTcuOTYxLTUuMjY2Yy00LjQyMiwwLTgtMy41NzgtOC04czMuNTc4LTgsOC04YzEwLjYyNSwwLDE2LjI3Myw2LjQ2MSwyMC4wMDgsMTAuNzM0ICAgICBjMy40NzcsMy45NzcsNC44NTksNS4yNjYsNy45NjEsNS4yNjZzNC40OTItMS4yODksNy45NjktNS4yNjZjMy43MzQtNC4yNzMsOS4zODMtMTAuNzM0LDIwLjAwOC0xMC43MzQgICAgIGMxMC42MzMsMCwxNi4wNyw2LjIwMywyMC4wMzEsMTAuNzI3YzMuNDkyLDMuOTg0LDQuODgzLDUuMjczLDgsNS4yNzNjMy4xMDksMCw0LjUtMS4yODksNy45OTItNS4yNjYgICAgIGMzLjc0Mi00LjI3Myw5LjM5MS0xMC43MzQsMjAuMDMxLTEwLjczNGM0LjQyMiwwLDgsMy41NzgsOCw4cy0zLjU3OCw4LTgsOGMtMy4xMTcsMC00LjUwOCwxLjI4OS04LDUuMjczICAgICBDMzAwLjI2NywyMjUuNTU1LDI5NC42MTksMjMyLjAwOCwyODMuOTg2LDIzMi4wMDh6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzU0NkE7IiBkPSJNMjMyLjAwMiwzODQuMDA4Yy0zLjY4LDAtNi45OTItMi41NTUtNy44MTMtNi4yOTdsLTQwLTE4NGMtMC45MzgtNC4zMiwxLjgwNS04LjU3OCw2LjExNy05LjUyMyAgICAgYzQuMzQ0LTAuOTUzLDguNTc4LDEuODA1LDkuNTIzLDYuMTE3bDQwLDE4NGMwLjkzOCw0LjMyLTEuODA1LDguNTc4LTYuMTE3LDkuNTIzICAgICBDMjMzLjEzNSwzODMuOTU0LDIzMi41NjQsMzg0LjAwOCwyMzIuMDAyLDM4NC4wMDh6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzU0NkE7IiBkPSJNMjgwLjAxNywzODQuMDA4Yy0wLjU2MywwLTEuMTMzLTAuMDU1LTEuNzExLTAuMThjLTQuMzEzLTAuOTQ1LTcuMDU1LTUuMjAzLTYuMTE3LTkuNTIzbDQwLTE4NCAgICAgYzAuOTQ1LTQuMzEzLDUuMTY0LTcuMDYzLDkuNTIzLTYuMTE3YzQuMzEzLDAuOTQ1LDcuMDU1LDUuMjAzLDYuMTE3LDkuNTIzbC00MCwxODQgICAgIEMyODcuMDEsMzgxLjQ1NCwyODMuNjk3LDM4NC4wMDgsMjgwLjAxNywzODQuMDA4eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNCNEI2QkM7IiBkPSJNMTkwLjYzMywzNzYuMDA4YzAuODUxLDMuNTkzLDEuMzc0LDcuMjkzLDEuMzc0LDExLjA4NnY2MC45MTRjMCwxNy42NDgsMTQuMzUyLDMyLDMyLDMyaDY0ICAgIGMxNy42NDgsMCwzMi0xNC4zNTIsMzItMzJ2LTYwLjkxNGMwLTMuNzksMC41MjctNy40OTEsMS4zODQtMTEuMDg2SDE5MC42MzN6Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojODY4NDkxOyIgZD0iTTI1Ni4wMDIsMzc2LjAwOGgtNjUuMzY5YzAuODUxLDMuNTkzLDEuMzc0LDcuMjkzLDEuMzc0LDExLjA4NnY2MC45MTRjMCwxNy42NDgsMTQuMzUyLDMyLDMyLDMyICAgIGgzMS45OTVWMzc2LjAwOHoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cmVjdCB4PSIyNTYuMDAyIiB5PSI0MDAuMDA4IiBzdHlsZT0iZmlsbDojODY4NDkxOyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjE2Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxyZWN0IHg9IjI1Ni4wMDYiIHk9IjQzMi4wMDgiIHN0eWxlPSJmaWxsOiM4Njg0OTE7IiB3aWR0aD0iNjQiIGhlaWdodD0iMTYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMTkyLjAwMiIgeT0iNDAwLjAwOCIgc3R5bGU9ImZpbGw6IzVDNTQ2QTsiIHdpZHRoPSI2NCIgaGVpZ2h0PSIxNiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cmVjdCB4PSIxOTIuMDAyIiB5PSI0MzIuMDA4IiBzdHlsZT0iZmlsbDojNUM1NDZBOyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjE2Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /> Idea Blog
                </nuxt-link>
            </div>

            <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
            <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
            <span class="nav-toggle" @click="toggle">
                <span></span>
                <span></span>
                <span></span>
            </span>

            <!-- This "nav-menu" is hidden on mobile -->
            <!-- Add the modifier "is-active" to display it on mobile -->
            <div class="nav-right nav-menu" >
                <nuxt-link to="/" class="nav-item">
                    <icon name="fa fa-home" />Home
                </nuxt-link>
                <nuxt-link to="/contact" class="nav-item">
                    <icon name="fa fa-phone" />Contact
                </nuxt-link>
            </div>

        </nav>
</template>

<script>
    //import $ from 'jquery';
    export default {
        methods: {
            toggle() {
                const tag = document.getElementsByClassName('nav-right nav-menu');
             
                if(tag.length <= 0)
                    return;
                    
                const nav = tag[0];
                const className = nav.getAttribute("class");
                if(className == "nav-right nav-menu") {
                    nav.className = "nav-right nav-menu is-active";
                } else {
                    nav.className = "nav-right nav-menu";
                }
            }
        }
    }
   
</script>