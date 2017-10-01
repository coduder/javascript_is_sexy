var CookieUtil = {
    /**
     * Retrieves value of cookie with given name
     * To do so, looks for occurrence of cookie name follow by equal sign in document.cookie
     * if pattern is found, indexOf() is used to find next semicolon after that location (indicates end of cookie)
     * if no semicolon is found, this cookie is last cookie thus the rest of the string is the cookie info
     * null is returned if no cookie is found
     * @param {String} name 
     * @return {String} cookieValue
     */
    get: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }

            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));

        }
        return cookieValue;
    },

    /**
     * Sets a cookie on the page with the specified arguments name and value required.
     * @param {String}  name
     * @param {String}  value
     * @param {Date}    expires   
     * @param {String}  path
     * @param {String}  domain
     * @param {Boolean} secure
     */

    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain=" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    },

    /**
     * "removes" a cookie by setting it's expiration date to a time 
     * in the past and clearing its value to an empty string.
     * Cookie to be removed must match all four variables bellow
     * @param {String} name
     * @param {String} path
     * @param {String} domain
     * @param {Boolean} secure
     */
    unset: function(name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
}