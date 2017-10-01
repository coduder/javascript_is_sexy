var SubCookieUtil = {
    /**
     * Retrieves subCookie component within the name parameter cookie with the subCookie subName
     * Returns null if no subcookie is found
     * 
     * @param {String} name
     * @param {String} subName
     * @return {String} subCookieValue
     */

    get: function(name, subName) {
        var subCookies = this.getAll(name);
        if (subCookies) {
            return subCookies[subName];
        } else {
            return null;
        }
    },

    /**
     * Retrieves all subcookies from the name specified cookie and returns them in a name/value
     * pair object. Returns null if no subcookies are found
     * 
     * @param {String} name
     * @return {Object} subCookies
     */

    getAll: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null,
            cookieEnd,
            subCookies,
            i,
            len,
            parts,
            result = {};

        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = document.cookie.substring(cookieStart +
                cookieName.length, cookieEnd);
            if (cookieValue.length > 0) {
                subCookies = cookieValue.split("&");

                for (i = 0, len = subCookies.length; i < len; i++) {
                    parts = subCookies[i].split("=");
                    result[decodeURIComponent(parts[0])] =
                        decodeURIComponent(parts[1]);
                }

                return result;
            }

            return null;
        }
    },

    set: function(name, subName, value, expires, path, domain, secure) {
        var subcookies = this.getAll(name) || {};
        subcookies[subName] = value;
        this.setAll(name, subcookies, expires, path, domain, secure);
    },

    setAll: function(name, subcookies, expires, path, domain, secure) {

        var cookieText = encodeURIComponent(name) + "=",
            subcookieParts = new Array(),
            subName;

        for (subName in subcookies) {
            if (subName.length > 0 && subcookies.hasOwnProperty(subName)) {
                subcookieParts.push(encodeURIComponent(subName) + "=" +
                    encodeURIComponent(subcookies[subName]));
            }
        }
        if (cookieParts.length > 0) {
            cookieText += subcookieParts.join("&");

            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toUTCString();
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
        } else {
            cookieText += "; expires=" + (new Date(0)).toUTCString();
        }

        document.cookie = cookieText;

    },

    /**
     * Remove single subcookie from cookie
     * 
     * @param {String}  name
     * @param {String}  subName
     * @param {String}  path
     * @param {String}  domain
     * @param {Boolean} secure
     */
    unset: function(name, subName, path, domain, secure) {
        var subcookies = this.getAll(name);
        if (subcookies) {
            delete subcookies[subName];
            this.setAll(name, subcookies, null, path, domain, secure);
        }
    },

    /**
     * Removes entire cookie
     * 
     * @param {String}  name
     * @param {String}  path
     * @param {String}  domain
     * @param {Boolean} secure
     */
    unsetAll: function(name, path, domain, secure) {
        this.setAll(name, null, new Date(0), path, domain, secure);
    }




};