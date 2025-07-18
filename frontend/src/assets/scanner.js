/**
 * Scanner.js allows users to scan documents from scanners within browsers.
 * Visit: http://asprise.com/document-scan-upload-image-browser
 *
 * Copyright (c) 2014-present, Asprise Pte Ltd. All rights reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of Asprise
 * Pte Ltd. The intellectual and technical concepts contained herein are proprietary
 * to Asprise and they are protected by trade secret and copyright laws.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

(function () {
    var modelsToAppendToBodyFromDeployJava = [];
    var s = null;
    var deployJava = (function () {
        function e(e) {
            h.debug && (console.log ? console.log(e) : alert(e));
        }
        function t(e, t) {
            if (null == e || 0 == e.length) {
                return !0;
            }
            var n = e.charAt(e.length - 1);
            if (
                ('+' != n &&
                    '*' != n &&
                    -1 != e.indexOf('_') &&
                    '_' != n &&
                    ((e += '*'), (n = '*')),
                (e = e.substring(0, e.length - 1)),
                e.length > 0)
            ) {
                var i = e.charAt(e.length - 1);
                ('.' == i || '_' == i) && (e = e.substring(0, e.length - 1));
            }
            return '*' == n ? 0 == t.indexOf(e) : '+' == n ? t >= e : !1;
        }
        function n() {
            var e = '//java.com/js/webstart.png';
            try {
                return -1 != document.location.protocol.indexOf('http') ? e : 'http:' + e;
            } catch (t) {
                return 'http:' + e;
            }
        }
        function i(e) {
            var t = 'http://java.com/dt-redirect';
            return null == e || 0 == e.length
                ? t
                : ('&' == e.charAt(0) && (e = e.substring(1, e.length)), t + '?' + e);
        }
        function r(e, t) {
            for (var n = e.length, i = 0; n > i; i++) {
                if (e[i] === t) {
                    return !0;
                }
            }
            return !1;
        }
        function a(e) {
            return r(u, e.toLowerCase());
        }
        function l(e) {
            return 'MSIE' != deployJava.browserName
                ? !0
                : deployJava.compareVersionToPattern(
                      deployJava.getPlugin().version,
                      ['10', '0', '0'],
                      !1,
                      !0
                  )
                ? !0
                : null == e
                ? !1
                : !t('1.6.0_33+', e);
        }
        var o = {
                core: ['id', 'class', 'title', 'style'],
                i18n: ['lang', 'dir'],
                events: [
                    'onclick',
                    'ondblclick',
                    'onmousedown',
                    'onmouseup',
                    'onmouseover',
                    'onmousemove',
                    'onmouseout',
                    'onkeypress',
                    'onkeydown',
                    'onkeyup',
                ],
                applet: [
                    'codebase',
                    'code',
                    'name',
                    'archive',
                    'object',
                    'width',
                    'height',
                    'alt',
                    'align',
                    'hspace',
                    'vspace',
                ],
                object: [
                    'classid',
                    'codebase',
                    'codetype',
                    'data',
                    'type',
                    'archive',
                    'declare',
                    'standby',
                    'height',
                    'width',
                    'usemap',
                    'name',
                    'tabindex',
                    'align',
                    'border',
                    'hspace',
                    'vspace',
                ],
            },
            u = (o.object.concat(o.core, o.i18n, o.events), o.applet.concat(o.core)),
            h = {
                debug: null,
                version: '20120801',
                firefoxJavaVersion: null,
                myInterval: null,
                preInstallJREList: null,
                returnPage: null,
                brand: null,
                locale: null,
                installType: null,
                EAInstallEnabled: !1,
                EarlyAccessURL: null,
                oldMimeType: 'application/npruntime-scriptable-plugin;DeploymentToolkit',
                mimeType: 'application/java-deployment-toolkit',
                launchButtonPNG: n(),
                browserName: null,
                browserName2: null,
                getJREs: function () {
                    var t = new Array();
                    if (this.isPluginInstalled()) {
                        for (var n = this.getPlugin(), i = n.jvms, r = 0; r < i.getLength(); r++) {
                            t[r] = i.get(r).version;
                        }
                    } else {
                        var a = this.getBrowser();
                        'MSIE' == a
                            ? this.testUsingActiveX('1.7.0')
                                ? (t[0] = '1.7.0')
                                : this.testUsingActiveX('1.6.0')
                                ? (t[0] = '1.6.0')
                                : this.testUsingActiveX('1.5.0')
                                ? (t[0] = '1.5.0')
                                : this.testUsingActiveX('1.4.2')
                                ? (t[0] = '1.4.2')
                                : this.testForMSVM() && (t[0] = '1.1')
                            : 'Netscape Family' == a &&
                              (this.getJPIVersionUsingMimeType(),
                              null != this.firefoxJavaVersion
                                  ? (t[0] = this.firefoxJavaVersion)
                                  : this.testUsingMimeTypes('1.7')
                                  ? (t[0] = '1.7.0')
                                  : this.testUsingMimeTypes('1.6')
                                  ? (t[0] = '1.6.0')
                                  : this.testUsingMimeTypes('1.5')
                                  ? (t[0] = '1.5.0')
                                  : this.testUsingMimeTypes('1.4.2')
                                  ? (t[0] = '1.4.2')
                                  : 'Safari' == this.browserName2 &&
                                    (this.testUsingPluginsArray('1.7.0')
                                        ? (t[0] = '1.7.0')
                                        : this.testUsingPluginsArray('1.6')
                                        ? (t[0] = '1.6.0')
                                        : this.testUsingPluginsArray('1.5')
                                        ? (t[0] = '1.5.0')
                                        : this.testUsingPluginsArray('1.4.2') && (t[0] = '1.4.2')));
                    }
                    if (this.debug) {
                        for (var r = 0; r < t.length; ++r) {
                            e('[getJREs()] We claim to have detected Java SE ' + t[r]);
                        }
                    }
                    return t;
                },
                installJRE: function (e, t) {
                    if (this.isPluginInstalled() && this.isAutoInstallEnabled(e)) {
                        var n = !1;
                        return (
                            (n = this.isCallbackSupported()
                                ? this.getPlugin().installJRE(e, t)
                                : this.getPlugin().installJRE(e)),
                            n &&
                                (this.refresh(),
                                null != this.returnPage && (document.location = this.returnPage)),
                            n
                        );
                    }
                    return this.installLatestJRE();
                },
                isAutoInstallEnabled: function (e) {
                    return this.isPluginInstalled()
                        ? ('undefined' == typeof e && (e = null), l(e))
                        : !1;
                },
                isCallbackSupported: function () {
                    return (
                        this.isPluginInstalled() &&
                        this.compareVersionToPattern(
                            this.getPlugin().version,
                            ['10', '2', '0'],
                            !1,
                            !0
                        )
                    );
                },
                installLatestJRE: function (e) {
                    if (this.isPluginInstalled() && this.isAutoInstallEnabled()) {
                        var t = !1;
                        return (
                            (t = this.isCallbackSupported()
                                ? this.getPlugin().installLatestJRE(e)
                                : this.getPlugin().installLatestJRE()),
                            t &&
                                (this.refresh(),
                                null != this.returnPage && (document.location = this.returnPage)),
                            t
                        );
                    }
                    var n = this.getBrowser(),
                        r = navigator.platform.toLowerCase();
                    return 'true' == this.EAInstallEnabled &&
                        -1 != r.indexOf('win') &&
                        null != this.EarlyAccessURL
                        ? ((this.preInstallJREList = this.getJREs()),
                          null != this.returnPage &&
                              (this.myInterval = setInterval('deployJava.poll()', 3000)),
                          (location.href = this.EarlyAccessURL),
                          !1)
                        : 'MSIE' == n
                        ? this.IEInstall()
                        : 'Netscape Family' == n && -1 != r.indexOf('win32')
                        ? this.FFInstall()
                        : ((location.href = i(
                              (null != this.returnPage ? '&returnPage=' + this.returnPage : '') +
                                  (null != this.locale ? '&locale=' + this.locale : '') +
                                  (null != this.brand ? '&brand=' + this.brand : '')
                          )),
                          !1);
                },
                runApplet: function (t, n, i) {
                    ('undefined' == i || null == i) && (i = '1.1');
                    var r = i.match('^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?' + '$');
                    if (
                        (null == this.returnPage && (this.returnPage = document.location),
                        null != r)
                    ) {
                        var a = this.getBrowser();
                        '?' != a
                            ? this.versionCheck(i + '+')
                                ? this.writeAppletTag(t, n)
                                : this.installJRE(i + '+') &&
                                  (this.refresh(),
                                  (location.href = document.location),
                                  this.writeAppletTag(t, n))
                            : this.writeAppletTag(t, n);
                    } else {
                        e('[runApplet()] Invalid minimumVersion argument to runApplet():' + i);
                    }
                },
                writeAppletTag: function (e, t) {
                    var n = '<applet ',
                        i = '',
                        r = '</applet>',
                        s = !0;
                    (null == t || 'object' != typeof t) && (t = new Object());
                    for (var l in e) {
                        a(l)
                            ? ((n += ' ' + l + '="' + e[l] + '"'), 'code' == l && (s = !1))
                            : (t[l] = e[l]);
                    }
                    var o = !1;
                    for (var u in t) {
                        'codebase_lookup' == u && (o = !0),
                            ('object' == u || 'java_object' == u || 'java_code' == u) && (s = !1),
                            (i += '<param name="' + u + '" value="' + t[u] + '"/>');
                    }
                    o || (i += '<param name="codebase_lookup" value="false"/>'),
                        s && (n += ' code="dummy"'),
                        (n += '>'),
                        document.write(n + '\n' + i + '\n' + r);
                },
                versionCheck: function (t) {
                    var n = 0,
                        i = t.match(
                            '^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?' + '(\\*|\\+)?$'
                        );
                    if (null != i) {
                        for (var r = !1, a = !1, s = new Array(), l = 1; l < i.length; ++l) {
                            'string' == typeof i[l] && '' != i[l] && ((s[n] = i[l]), n++);
                        }
                        '+' == s[s.length - 1]
                            ? ((a = !0), (r = !1), s.length--)
                            : '*' == s[s.length - 1]
                            ? ((a = !1), (r = !0), s.length--)
                            : s.length < 4 && ((a = !1), (r = !0));
                        for (var o = this.getJREs(), l = 0; l < o.length; ++l) {
                            if (this.compareVersionToPattern(o[l], s, r, a)) {
                                return !0;
                            }
                        }
                        return !1;
                    }
                    var u = 'Invalid versionPattern passed to versionCheck: ' + t;
                    return e('[versionCheck()] ' + u), alert(u), !1;
                },
                isWebStartInstalled: function (t) {
                    var n = this.getBrowser();
                    if ('?' == n) {
                        return !0;
                    }
                    ('undefined' == t || null == t) && (t = '1.4.2');
                    var i = !1,
                        r = t.match('^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?' + '$');
                    return (
                        null != r
                            ? (i = this.versionCheck(t + '+'))
                            : (e(
                                  '[isWebStartInstaller()] Invalid minimumVersion argument to isWebStartInstalled(): ' +
                                      t
                              ),
                              (i = this.versionCheck('1.4.2+'))),
                        i
                    );
                },
                getJPIVersionUsingMimeType: function () {
                    for (var e = 0; e < navigator.mimeTypes.length; ++e) {
                        var t = navigator.mimeTypes[e].type,
                            n = t.match(/^application\/x-java-applet;jpi-version=(.*)$/);
                        if (
                            null != n &&
                            ((this.firefoxJavaVersion = n[1]), 'Opera' != this.browserName2)
                        ) {
                            break;
                        }
                    }
                },
                launchWebStartApplication: function (e) {
                    navigator.userAgent.toLowerCase();
                    if (
                        (this.getJPIVersionUsingMimeType(),
                        0 == this.isWebStartInstalled('1.7.0') &&
                            (0 == this.installJRE('1.7.0+') ||
                                0 == this.isWebStartInstalled('1.7.0')))
                    ) {
                        return !1;
                    }
                    var t = null;
                    document.documentURI && (t = document.documentURI),
                        null == t && (t = document.URL);
                    var n,
                        i = this.getBrowser();
                    if (
                        ('MSIE' == i
                            ? (n =
                                  '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="0" height="0"><PARAM name="launchjnlp" value="' +
                                  e +
                                  '"><PARAM name="docbase" value="' +
                                  encodeURIComponent(t) +
                                  '"></object>')
                            : 'Netscape Family' == i &&
                              (n =
                                  '<embed type="application/x-java-applet;jpi-version=' +
                                  this.firefoxJavaVersion +
                                  '" width="0" height="0" launchjnlp="' +
                                  e +
                                  '"docbase="' +
                                  encodeURIComponent(t) +
                                  '" />'),
                        'undefined' == document.body || null == document.body)
                    ) {
                        document.write(n), (document.location = t);
                    } else {
                        var r = document.createElement('div');
                        (r.id = 'div1'),
                            (r.style.position = 'relative'),
                            (r.style.left = '-10000px'),
                            (r.style.margin = '0px auto'),
                            (r.className = 'dynamicDiv'),
                            (r.innerHTML = n),
                            document.body.appendChild(r);
                    }
                },
                createWebStartLaunchButtonEx: function (e, t) {
                    null == this.returnPage && (this.returnPage = e);
                    var n = "javascript:deployJava.launchWebStartApplication('" + e + "');";
                    document.write(
                        '<a href="' +
                            n +
                            '" onMouseOver="window.status=\'\'; return true;"><img src="' +
                            this.launchButtonPNG +
                            '" border="0" /></a>'
                    );
                },
                createWebStartLaunchButton: function (e, t) {
                    null == this.returnPage && (this.returnPage = e);
                    var n =
                        'javascript:if (!deployJava.isWebStartInstalled(&quot;' +
                        t +
                        '&quot;)) {if (deployJava.installLatestJRE()) {if (deployJava.launch(&quot;' +
                        e +
                        '&quot;)) {}}} else {if (deployJava.launch(&quot;' +
                        e +
                        '&quot;)) {}}';
                    document.write(
                        '<a href="' +
                            n +
                            '" onMouseOver="window.status=\'\'; return true;"><img src="' +
                            this.launchButtonPNG +
                            '" border="0" /></a>'
                    );
                },
                launch: function (e) {
                    return (document.location = e), !0;
                },
                isPluginInstalled: function () {
                    var e = this.getPlugin();
                    return e && e.jvms ? !0 : !1;
                },
                isAutoUpdateEnabled: function () {
                    return this.isPluginInstalled() ? this.getPlugin().isAutoUpdateEnabled() : !1;
                },
                setAutoUpdateEnabled: function () {
                    return this.isPluginInstalled() ? this.getPlugin().setAutoUpdateEnabled() : !1;
                },
                setInstallerType: function (e) {
                    return (
                        (this.installType = e),
                        this.isPluginInstalled() ? this.getPlugin().setInstallerType(e) : !1
                    );
                },
                setAdditionalPackages: function (e) {
                    return this.isPluginInstalled()
                        ? this.getPlugin().setAdditionalPackages(e)
                        : !1;
                },
                setEarlyAccess: function (e) {
                    this.EAInstallEnabled = e;
                },
                isPlugin2: function () {
                    if (this.isPluginInstalled() && this.versionCheck('1.6.0_10+')) {
                        try {
                            return this.getPlugin().isPlugin2();
                        } catch (e) {}
                    }
                    return !1;
                },
                allowPlugin: function () {
                    this.getBrowser();
                    var e = 'Safari' != this.browserName2 && 'Opera' != this.browserName2;
                    return e;
                },
                getPlugin: function () {
                    this.refresh();
                    var e = null;
                    return (
                        this.allowPlugin() && (e = document.getElementById('deployJavaPlugin')), e
                    );
                },
                compareVersionToPattern: function (e, t, n, i) {
                    if (void 0 == e || void 0 == t) {
                        return !1;
                    }
                    var r = e.match('^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:[_\\.](\\d+))?)?)?' + '$');
                    if (null != r) {
                        for (var a = 0, s = new Array(), l = 1; l < r.length; ++l) {
                            'string' == typeof r[l] && '' != r[l] && ((s[a] = r[l]), a++);
                        }
                        var o = Math.min(s.length, t.length);
                        if (i) {
                            for (var l = 0; o > l; ++l) {
                                var u = parseInt(s[l]),
                                    h = parseInt(t[l]);
                                if (h > u) {
                                    return !1;
                                }
                                if (u > h) {
                                    return !0;
                                }
                            }
                            return !0;
                        }
                        for (var l = 0; o > l; ++l) {
                            if (s[l] != t[l]) {
                                return !1;
                            }
                        }
                        return n ? !0 : s.length == t.length;
                    }
                    return !1;
                },
                getBrowser: function () {
                    if (null == this.browserName) {
                        var t = navigator.userAgent.toLowerCase();
                        e('[getBrowser()] navigator.userAgent.toLowerCase() -> ' + t),
                            -1 != t.indexOf('msie') && -1 == t.indexOf('opera')
                                ? ((this.browserName = 'MSIE'), (this.browserName2 = 'MSIE'))
                                : -1 != t.indexOf('trident') || -1 != t.indexOf('Trident')
                                ? ((this.browserName = 'MSIE'), (this.browserName2 = 'MSIE'))
                                : -1 != t.indexOf('iphone')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'iPhone'))
                                : -1 != t.indexOf('firefox') && -1 == t.indexOf('opera')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'Firefox'))
                                : -1 != t.indexOf('chrome')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'Chrome'))
                                : -1 != t.indexOf('safari')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'Safari'))
                                : -1 != t.indexOf('mozilla') && -1 == t.indexOf('opera')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'Other'))
                                : -1 != t.indexOf('opera')
                                ? ((this.browserName = 'Netscape Family'),
                                  (this.browserName2 = 'Opera'))
                                : ((this.browserName = '?'), (this.browserName2 = 'unknown')),
                            e(
                                '[getBrowser()] Detected browser name:' +
                                    this.browserName +
                                    ', ' +
                                    this.browserName2
                            );
                    }
                    return this.browserName;
                },
                testUsingActiveX: function (t) {
                    var n = 'JavaWebStart.isInstalled.' + t + '.0';
                    if ('undefined' == typeof ActiveXObject || !ActiveXObject) {
                        return (
                            e(
                                '[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?'
                            ),
                            !1
                        );
                    }
                    try {
                        return null != new ActiveXObject(n);
                    } catch (i) {
                        return !1;
                    }
                },
                testForMSVM: function () {
                    var e = '{08B0E5C0-4FCB-11CF-AAA5-00401C608500}';
                    if ('undefined' != typeof oClientCaps) {
                        var t = oClientCaps.getComponentVersion(e, 'ComponentID');
                        return '' == t || '5,0,5000,0' == t ? !1 : !0;
                    }
                    return !1;
                },
                testUsingMimeTypes: function (t) {
                    if (!navigator.mimeTypes) {
                        return (
                            e(
                                '[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?'
                            ),
                            !1
                        );
                    }
                    for (var n = 0; n < navigator.mimeTypes.length; ++n) {
                        s = navigator.mimeTypes[n].type;
                        var i = s.match(
                            /^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/
                        );
                        if (null != i && this.compareVersions(i[1], t)) {
                            return !0;
                        }
                    }
                    return !1;
                },
                testUsingPluginsArray: function (e) {
                    if (!navigator.plugins || !navigator.plugins.length) {
                        return !1;
                    }
                    for (
                        var t = navigator.platform.toLowerCase(), n = 0;
                        n < navigator.plugins.length;
                        ++n
                    ) {
                        if (
                            ((s = navigator.plugins[n].description),
                            -1 != s.search(/^Java Switchable Plug-in (Cocoa)/))
                        ) {
                            if (this.compareVersions('1.5.0', e)) {
                                return !0;
                            }
                        } else {
                            if (
                                -1 != s.search(/^Java/) &&
                                -1 != t.indexOf('win') &&
                                (this.compareVersions('1.5.0', e) ||
                                    this.compareVersions('1.6.0', e))
                            ) {
                                return !0;
                            }
                        }
                    }
                    return this.compareVersions('1.5.0', e) ? !0 : !1;
                },
                IEInstall: function () {
                    return (
                        (location.href = i(
                            (null != this.returnPage ? '&returnPage=' + this.returnPage : '') +
                                (null != this.locale ? '&locale=' + this.locale : '') +
                                (null != this.brand ? '&brand=' + this.brand : '')
                        )),
                        !1
                    );
                },
                done: function (e, t) {},
                FFInstall: function () {
                    return (
                        (location.href = i(
                            (null != this.returnPage ? '&returnPage=' + this.returnPage : '') +
                                (null != this.locale ? '&locale=' + this.locale : '') +
                                (null != this.brand ? '&brand=' + this.brand : '') +
                                (null != this.installType ? '&type=' + this.installType : '')
                        )),
                        !1
                    );
                },
                compareVersions: function (e, t) {
                    for (var n = e.split('.'), i = t.split('.'), r = 0; r < n.length; ++r) {
                        n[r] = Number(n[r]);
                    }
                    for (var r = 0; r < i.length; ++r) {
                        i[r] = Number(i[r]);
                    }
                    return (
                        2 == n.length && (n[2] = 0),
                        n[0] > i[0]
                            ? !0
                            : n[0] < i[0]
                            ? !1
                            : n[1] > i[1]
                            ? !0
                            : n[1] < i[1]
                            ? !1
                            : n[2] > i[2]
                            ? !0
                            : n[2] < i[2]
                            ? !1
                            : !0
                    );
                },
                enableAlerts: function () {
                    (this.browserName = null), (this.debug = !0);
                },
                poll: function () {
                    this.refresh();
                    var e = this.getJREs();
                    0 == this.preInstallJREList.length &&
                        0 != e.length &&
                        (clearInterval(this.myInterval),
                        null != this.returnPage && (location.href = this.returnPage)),
                        0 != this.preInstallJREList.length &&
                            0 != e.length &&
                            this.preInstallJREList[0] != e[0] &&
                            (clearInterval(this.myInterval),
                            null != this.returnPage && (location.href = this.returnPage));
                },
                writePluginTag: function () {
                    var e = this.getBrowser();
                    if ('MSIE' == e) {
                        var t = {
                            name: 'object',
                            attributes: {
                                id: 'deployJavaPlugin',
                                classid: 'clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA',
                                width: '0',
                                height: '0',
                            },
                        };
                        modelsToAppendToBodyFromDeployJava.push(t);
                    } else {
                        'Netscape Family' == e && this.allowPlugin() && this.writeEmbedTag();
                    }
                },
                refresh: function () {
                    navigator.plugins.refresh(!1);
                    var e = this.getBrowser();
                    if ('Netscape Family' == e && this.allowPlugin()) {
                        var t = document.getElementById('deployJavaPlugin');
                        null == t && this.writeEmbedTag();
                    }
                },
                writeEmbedTag: function () {
                    var e = !1;
                    if (null != navigator.mimeTypes) {
                        for (var t = 0; t < navigator.mimeTypes.length; t++) {
                            if (
                                navigator.mimeTypes[t].type == this.mimeType &&
                                navigator.mimeTypes[t].enabledPlugin
                            ) {
                                var n = {
                                    name: 'embed',
                                    attributes: {
                                        id: 'deployJavaPlugin',
                                        type: this.mimeType,
                                        hidden: 'true',
                                    },
                                };
                                modelsToAppendToBodyFromDeployJava.push(n), (e = !0);
                            }
                        }
                        if (!e) {
                            for (var t = 0; t < navigator.mimeTypes.length; t++) {
                                if (
                                    navigator.mimeTypes[t].type == this.oldMimeType &&
                                    navigator.mimeTypes[t].enabledPlugin
                                ) {
                                    ({
                                        name: 'embed',
                                        attributes: {
                                            id: 'deployJavaPlugin',
                                            type: this.oldMimeType,
                                            hidden: 'true',
                                        },
                                    });
                                    modelsToAppendToBodyFromDeployJava.push(this.oldMimeType);
                                }
                            }
                        }
                    }
                },
            };
        if ((h.writePluginTag(), null == h.locale)) {
            var c = null;
            if (null == c) {
                try {
                    c = navigator.userLanguage;
                } catch (g) {}
            }
            if (null == c) {
                try {
                    c = navigator.systemLanguage;
                } catch (g) {}
            }
            if (null == c) {
                try {
                    c = navigator.language;
                } catch (g) {}
            }
            null != c && (c.replace('-', '_'), (h.locale = c));
        }
        return h;
    })();
    window['EXT_LIB_DEF_FUNC_BOWSER'] = function () {
        function t(t) {
            function n(e) {
                var n = t.match(e);
                return (n && n.length > 1 && n[1]) || '';
            }
            function r(e) {
                var n = t.match(e);
                return (n && n.length > 1 && n[2]) || '';
            }
            function N(e) {
                switch (e) {
                    case 'NT':
                        return 'NT';
                    case 'XP':
                        return 'XP';
                    case 'NT 5.0':
                        return '2000';
                    case 'NT 5.1':
                        return 'XP';
                    case 'NT 5.2':
                        return '2003';
                    case 'NT 6.0':
                        return 'Vista';
                    case 'NT 6.1':
                        return '7';
                    case 'NT 6.2':
                        return '8';
                    case 'NT 6.3':
                        return '8.1';
                    case 'NT 10.0':
                        return '10';
                    default:
                        return undefined;
                }
            }
            var i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                s = /like android/i.test(t),
                o = !s && /android/i.test(t),
                u = /nexus\s*[0-6]\s*/i.test(t),
                a = !u && /nexus\s*[0-9]+/i.test(t),
                f = /CrOS/.test(t),
                l = /silk/i.test(t),
                c = /sailfish/i.test(t),
                h = /tizen/i.test(t),
                p = /(web|hpw)os/i.test(t),
                d = /windows phone/i.test(t),
                v = /SamsungBrowser/i.test(t),
                m = !d && /windows/i.test(t),
                g = !i && !l && /macintosh/i.test(t),
                y = !o && !c && !h && !p && /linux/i.test(t),
                b = n(/edge\/(\d+(\.\d+)?)/i),
                w = n(/version\/(\d+(\.\d+)?)/i),
                E = /tablet/i.test(t) && !/tablet pc/i.test(t),
                S = !E && /[^-]mobi/i.test(t),
                x = /xbox/i.test(t),
                T;
            /opera/i.test(t)
                ? (T = {
                      name: 'Opera',
                      opera: e,
                      version: w || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
                  })
                : /opr\/|opios/i.test(t)
                ? (T = {
                      name: 'Opera',
                      opera: e,
                      version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w,
                  })
                : /SamsungBrowser/i.test(t)
                ? (T = {
                      name: 'Samsung Internet for Android',
                      samsungBrowser: e,
                      version: w || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
                  })
                : /coast/i.test(t)
                ? (T = {
                      name: 'Opera Coast',
                      coast: e,
                      version: w || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
                  })
                : /yabrowser/i.test(t)
                ? (T = {
                      name: 'Yandex Browser',
                      yandexbrowser: e,
                      version: w || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
                  })
                : /ucbrowser/i.test(t)
                ? (T = {
                      name: 'UC Browser',
                      ucbrowser: e,
                      version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
                  })
                : /mxios/i.test(t)
                ? (T = {
                      name: 'Maxthon',
                      maxthon: e,
                      version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
                  })
                : /epiphany/i.test(t)
                ? (T = {
                      name: 'Epiphany',
                      epiphany: e,
                      version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
                  })
                : /puffin/i.test(t)
                ? (T = {
                      name: 'Puffin',
                      puffin: e,
                      version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
                  })
                : /sleipnir/i.test(t)
                ? (T = {
                      name: 'Sleipnir',
                      sleipnir: e,
                      version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
                  })
                : /k-meleon/i.test(t)
                ? (T = {
                      name: 'K-Meleon',
                      kMeleon: e,
                      version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
                  })
                : d
                ? ((T = {
                      name: 'Windows Phone',
                      osname: 'Windows Phone',
                      windowsphone: e,
                  }),
                  b
                      ? ((T.msedge = e), (T.version = b))
                      : ((T.msie = e), (T.version = n(/iemobile\/(\d+(\.\d+)?)/i))))
                : /msie|trident/i.test(t)
                ? (T = {
                      name: 'Internet Explorer',
                      msie: e,
                      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i),
                  })
                : f
                ? (T = {
                      name: 'Chrome',
                      osname: 'Chrome OS',
                      chromeos: e,
                      chromeBook: e,
                      chrome: e,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                  })
                : /chrome.+? edge/i.test(t)
                ? (T = { name: 'Microsoft Edge', msedge: e, version: b })
                : /vivaldi/i.test(t)
                ? (T = {
                      name: 'Vivaldi',
                      vivaldi: e,
                      version: n(/vivaldi\/(\d+(\.\d+)?)/i) || w,
                  })
                : c
                ? (T = {
                      name: 'Sailfish',
                      osname: 'Sailfish OS',
                      sailfish: e,
                      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
                  })
                : /seamonkey\//i.test(t)
                ? (T = {
                      name: 'SeaMonkey',
                      seamonkey: e,
                      version: n(/seamonkey\/(\d+(\.\d+)?)/i),
                  })
                : /firefox|iceweasel|fxios/i.test(t)
                ? ((T = {
                      name: 'Firefox',
                      firefox: e,
                      version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i),
                  }),
                  /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) &&
                      ((T.firefoxos = e), (T.osname = 'Firefox OS')))
                : l
                ? (T = {
                      name: 'Amazon Silk',
                      silk: e,
                      version: n(/silk\/(\d+(\.\d+)?)/i),
                  })
                : /phantom/i.test(t)
                ? (T = {
                      name: 'PhantomJS',
                      phantom: e,
                      version: n(/phantomjs\/(\d+(\.\d+)?)/i),
                  })
                : /slimerjs/i.test(t)
                ? (T = {
                      name: 'SlimerJS',
                      slimer: e,
                      version: n(/slimerjs\/(\d+(\.\d+)?)/i),
                  })
                : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
                ? (T = {
                      name: 'BlackBerry',
                      osname: 'BlackBerry OS',
                      blackberry: e,
                      version: w || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
                  })
                : p
                ? ((T = {
                      name: 'WebOS',
                      osname: 'WebOS',
                      webos: e,
                      version: w || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
                  }),
                  /touchpad\//i.test(t) && (T.touchpad = e))
                : /bada/i.test(t)
                ? (T = {
                      name: 'Bada',
                      osname: 'Bada',
                      bada: e,
                      version: n(/dolfin\/(\d+(\.\d+)?)/i),
                  })
                : h
                ? (T = {
                      name: 'Tizen',
                      osname: 'Tizen',
                      tizen: e,
                      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w,
                  })
                : /qupzilla/i.test(t)
                ? (T = {
                      name: 'QupZilla',
                      qupzilla: e,
                      version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w,
                  })
                : /chromium/i.test(t)
                ? (T = {
                      name: 'Chromium',
                      chromium: e,
                      version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w,
                  })
                : /chrome|crios|crmo/i.test(t)
                ? (T = {
                      name: 'Chrome',
                      chrome: e,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
                  })
                : o
                ? (T = { name: 'Android', version: w })
                : /safari|applewebkit/i.test(t)
                ? ((T = { name: 'Safari', safari: e }), w && (T.version = w))
                : i
                ? ((T = {
                      name: i == 'iphone' ? 'iPhone' : i == 'ipad' ? 'iPad' : 'iPod',
                  }),
                  w && (T.version = w))
                : /googlebot/i.test(t)
                ? (T = {
                      name: 'Googlebot',
                      googlebot: e,
                      version: n(/googlebot\/(\d+(\.\d+))/i) || w,
                  })
                : (T = { name: n(/^(.*)\/(.*) /), version: r(/^(.*)\/(.*) /) }),
                !T.msedge && /(apple)?webkit/i.test(t)
                    ? (/(apple)?webkit\/537\.36/i.test(t)
                          ? ((T.name = T.name || 'Blink'), (T.blink = e))
                          : ((T.name = T.name || 'Webkit'), (T.webkit = e)),
                      !T.version && w && (T.version = w))
                    : !T.opera &&
                      /gecko\//i.test(t) &&
                      ((T.name = T.name || 'Gecko'),
                      (T.gecko = e),
                      (T.version = T.version || n(/gecko\/(\d+(\.\d+)?)/i))),
                !T.windowsphone && !T.msedge && (o || T.silk)
                    ? ((T.android = e), (T.osname = 'Android'))
                    : !T.windowsphone && !T.msedge && i
                    ? ((T[i] = e), (T.ios = e), (T.osname = 'iOS'))
                    : g
                    ? ((T.mac = e), (T.osname = 'macOS'))
                    : x
                    ? ((T.xbox = e), (T.osname = 'Xbox'))
                    : m
                    ? ((T.windows = e), (T.osname = 'Windows'))
                    : y && ((T.linux = e), (T.osname = 'Linux'));
            var C = '';
            T.windows
                ? (C = N(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
                : T.windowsphone
                ? (C = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
                : T.mac
                ? ((C = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)), (C = C.replace(/[_\s]/g, '.')))
                : i
                ? ((C = n(/os (\d+([_\s]\d+)*) like mac os x/i)), (C = C.replace(/[_\s]/g, '.')))
                : o
                ? (C = n(/android[ \/-](\d+(\.\d+)*)/i))
                : T.webos
                ? (C = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
                : T.blackberry
                ? (C = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
                : T.bada
                ? (C = n(/bada\/(\d+(\.\d+)*)/i))
                : T.tizen && (C = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
                C && (T.osversion = C);
            var k = !T.windows && C.split('.')[0];
            if (E || a || i == 'ipad' || (o && (k == 3 || (k >= 4 && !S))) || T.silk) {
                T.tablet = e;
            } else {
                if (
                    S ||
                    i == 'iphone' ||
                    i == 'ipod' ||
                    o ||
                    u ||
                    T.blackberry ||
                    T.webos ||
                    T.bada
                ) {
                    T.mobile = e;
                }
            }
            return (
                T.msedge ||
                (T.msie && T.version >= 10) ||
                (T.yandexbrowser && T.version >= 15) ||
                (T.vivaldi && T.version >= 1) ||
                (T.chrome && T.version >= 20) ||
                (T.samsungBrowser && T.version >= 4) ||
                (T.firefox && T.version >= 20) ||
                (T.safari && T.version >= 6) ||
                (T.opera && T.version >= 10) ||
                (T.ios && T.osversion && T.osversion.split('.')[0] >= 6) ||
                (T.blackberry && T.version >= 10.1) ||
                (T.chromium && T.version >= 20)
                    ? (T.a = e)
                    : (T.msie && T.version < 10) ||
                      (T.chrome && T.version < 20) ||
                      (T.firefox && T.version < 20) ||
                      (T.safari && T.version < 6) ||
                      (T.opera && T.version < 10) ||
                      (T.ios && T.osversion && T.osversion.split('.')[0] < 6) ||
                      (T.chromium && T.version < 20)
                    ? (T.c = e)
                    : (T.x = e),
                T
            );
        }
        function r(e) {
            return e.split('.').length;
        }
        function i(e, t) {
            var n = [],
                r;
            if (Array.prototype.map) {
                return Array.prototype.map.call(e, t);
            }
            for (r = 0; r < e.length; r++) {
                n.push(t(e[r]));
            }
            return n;
        }
        function s(e) {
            var t = Math.max(r(e[0]), r(e[1])),
                n = i(e, function (e) {
                    var n = t - r(e);
                    return (
                        (e += new Array(n + 1).join('.0')),
                        i(e.split('.'), function (e) {
                            return new Array(20 - e.length).join('0') + e;
                        }).reverse()
                    );
                });
            while (--t >= 0) {
                if (n[0][t] > n[1][t]) {
                    return 1;
                }
                if (n[0][t] !== n[1][t]) {
                    return -1;
                }
                if (t === 0) {
                    return 0;
                }
            }
        }
        function o(e, r, i) {
            var o = n;
            typeof r == 'string' && ((i = r), (r = void 0)),
                r === void 0 && (r = !1),
                i && (o = t(i));
            var u = '' + o.version;
            for (var a in e) {
                if (e.hasOwnProperty(a) && o[a]) {
                    if (typeof e[a] != 'string') {
                        throw new Error(
                            'Browser version in the minVersion map should be a string: ' +
                                a +
                                ': ' +
                                String(e)
                        );
                    }
                    return s([u, e[a]]) < 0;
                }
            }
            return r;
        }
        function u(e, t, n) {
            return !o(e, t, n);
        }
        var e = !0,
            n = t(typeof navigator != 'undefined' ? navigator.userAgent || '' : '');
        return (
            (n.test = function (e) {
                for (var t = 0; t < e.length; ++t) {
                    var r = e[t];
                    if (typeof r == 'string' && r in n) {
                        return !0;
                    }
                }
                return !1;
            }),
            (n.isUnsupportedBrowser = o),
            (n.compareVersions = s),
            (n.check = u),
            (n._detect = t),
            n
        );
    };
    var g,
        h,
        ba = new Date().getTime() + '-' + Math.floor(1001 * Math.random() + 0);
    function l(a, b, c, d, f) {
        this.mimeType = a;
        this.b = b;
        this.src = c;
        this.m = d;
        this.a = f;
    }
    g = l.prototype;
    g.u = function () {
        return this.m;
    };
    g.v = function () {
        return this.mimeType;
    };
    g.w = function () {
        return this.b;
    };
    g.s = function () {
        return this.a;
    };
    g.h = function () {
        return 'object' === typeof this.a ? this.a.ImageWidth : void 0;
    };
    g.f = function () {
        return 'object' === typeof this.a ? this.a.ImageLength : void 0;
    };
    g.c = function () {
        return 'object' === typeof this.a ? this.a.BitsPerPixel : void 0;
    };
    g.j = function () {
        return 'object' === typeof this.a ? 2 == this.a.PixelType : void 0;
    };
    g.l = function () {
        return 'object' === typeof this.a ? 1 == this.a.PixelType : void 0;
    };
    g.i = function () {
        return 'object' === typeof this.a ? 0 == this.a.PixelType : void 0;
    };
    g.g = function () {
        return 'object' === typeof this.a ? Math.floor(this.a.XResolution) : void 0;
    };
    g.o = function () {
        if (this.b) return this.b ? ca(this.src) : void 0;
    };
    g.toString = function () {
        var a = '';
        this.j() ? (a += 'Color ') : this.l() ? (a += 'Gray ') : this.i() && (a += 'Black/white ');
        a += 'image:';
        var b = this.h(),
            c = this.f(),
            d = this.c(),
            f = this.g();
        0 < b && 0 < c && (a += ' ' + b + ' x ' + c);
        0 < d && (a += ' ' + d + '-bit');
        0 < f && (a += ' @ ' + f + ' DPI');
        return a;
    };
    function n(a, b) {
        var c = 'scannerjs_' + a;
        c = window && c in window ? window[c] : void 0;
        !c &&
            window &&
            'scannerjs_config' in window &&
            (c = a in window.scannerjs_config ? window.scannerjs_config[a] : void 0);
        return void 0 == c || null == c ? b : c;
    }
    var da,
        p,
        q,
        ea,
        r,
        fa,
        ha,
        ia,
        t,
        ja,
        u,
        w,
        y,
        z,
        ka,
        A,
        B,
        C,
        la,
        ma,
        oa,
        D,
        pa,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        qa,
        L,
        M;
    da = n('log_level', 0);
    p = n('java_applet_enabled', !1);
    q = !1;
    ea = n('scan_app_enabled', !0);
    r = n('scan_app_download_url', 'http://cdn.asprise.com/scanapp/scan-setup.exe');
    fa = n('scan_app_min_version', '2.04');
    ha = n(
        'license',
        'com_asprise_scan_app_license' in window ? window.com_asprise_scan_app_license : null
    );
    ia = n('skip_load_default_css', !1);
    t = n('scan_app_port_range_lowest', 9713);
    ja = n('scan_app_port_range_highest', 9716);
    A = ka = z = y = w = u = void 0;
    B = [];
    la = C = void 0;
    ma = n('form_field_name_for_img_objects', 'com_asprise_scannerjs_images[]');
    oa = n('form_field_name_for_img_urls', 'com_asprise_scannerjs_images_urls[]');
    D = !1;
    pa = n('eager_init', !0);
    E = null;
    F = n('display_install_func', void 0);
    G = n('display_scan_ready_func', void 0);
    H = n('event_listener', void 0);
    I = n('sys_response_callback_func', void 0);
    J = n('reverse_request_handler_func', void 0);
    K = !1;
    qa = n('additional_css_classes_for_dialogs', '');
    L = n('file_name_base', 'scanner');
    M = function (a) {
        if (!D || a) {
            a &&
                ((da = n('log_level', 0)),
                (t = n('scan_app_port_range_lowest', 9713)),
                (ja = n('scan_app_port_range_highest', 9716)),
                (F = n('display_install_func', void 0)),
                (G = n('display_scan_ready_func', void 0)),
                (H = n('event_listener', void 0)),
                (I = n('sys_response_callback_func', void 0)),
                (J = n('reverse_request_handler_func', void 0)),
                (N = n('max_conn_attempts', -1)));
            E = new Date();
            H && H('pre-init');
            n('skip_fix_formdata_append', !1) || ra();
            O('Initializing Scanner.js v2.11.3 \u00a9 Asprise ...');
            ia || sa();
            if (p && P()) {
                (a = window.location.href) &&
                    0 > a.toLowerCase().indexOf('http:') &&
                    0 > a.toLowerCase().indexOf('https:') &&
                    (O(
                        'The scan applet does *NOT* work in local HTML files. Please host this page on localhost or any other servers and access it using http:// or https://.',
                        !0
                    ),
                    alert(
                        'The scan applet does *NOT* work in local HTML files. Please host this page on localhost or any other servers and access it using http:// or https://.'
                    ));
                O('Attempt to enable Java applet for scanning ...');
                O(Q.name + ' ' + Q.version + ' supports NPAPI? ' + P());
                ta();
                try {
                    ua();
                } catch (b) {
                    O('Failed to add applet element: ' + b, !0);
                }
                ea &&
                    R() &&
                    (!va() || Q.firefox
                        ? window.setTimeout(function () {
                              K ||
                                  (O(
                                      "Java applet doesn't seem running. Falling back to scan app ..."
                                  ),
                                  S());
                          }, 1e3)
                        : O('JRE: ' + wa.getJREs()));
            } else
                p &&
                    !P() &&
                    O(
                        "The scanning Java applet is set to on, but this browser doesn't support NPAPI: " +
                            Q.name +
                            ' ' +
                            Q.version,
                        !0
                    ),
                    S();
            O('Scanner.js initialized.');
            D = !0;
            H && H('post-init');
        }
    };
    var T = null;
    function U(a, b, c, d, f, e, k, m, v, aa) {
        V() ||
            q ||
            ('scan' != b && 'listSources' != b && 'getSource' != b && 'getSystemInfo' != b) ||
            (T = arguments);
        if (!V() && !q)
            return (
                p && P() ? null != E && 1e4 < new Date().getTime() - E.getTime() && xa(!0) : xa(!0),
                !1
            );
        if (2 > arguments.length)
            return W('Invalid function call - func name is not specified'), !1;
        if ('function' !== typeof a)
            return W('asprise_scanner_js_call_function requires a valid callbackFunc'), !1;
        if ('PENDING' == A || 'PROCESSING' == A)
            return (
                W(
                    'You can not submit a new request as the previous request has not completed yet.'
                ),
                !1
            );
        if (!JSON || 'function' !== typeof JSON.stringify)
            return W('JSON.stringify is not supported by your browser.'), !1;
        for (
            var x = {
                    funcCallId: '' + new Date().getTime() + '-' + Math.floor(1e4 * Math.random()),
                    funcName: b,
                    time: new Date().getTime(),
                    userAgent: navigator.userAgent,
                    isModernBrowser: R(),
                    windowTitle: document.title,
                    url: window.location.href,
                    pageLoadId: ya(),
                },
                Aa = [],
                na = 2;
            na < arguments.length;
            na++
        )
            Aa.push(arguments[na]);
        x.funcArgs = Aa;
        x = JSON.stringify(x);
        A = 'PENDING';
        C = x;
        la = a;
        H && H('func-call', x);
        za();
        return !0;
    }
    function Ba() {
        if ('PENDING' == A || 'PROCESSING' == A) {
            var a = JSON.parse(C);
            B.push(a);
            O('Canceled func call: ' + a.funcName + ', call id: ' + a.funcCallId);
            H && H('func-cancelled', a);
        }
        A = void 0;
    }
    function za() {
        if (V() && 'PENDING' == A)
            try {
                w.send(C), (A = 'PROCESSING');
            } catch (a) {
                X(!1, 'Failed: ' + a, null, null, null, null, null), O(a, !0);
            }
    }
    function Ca(a) {
        var b = null;
        if ('string' === typeof a && 6 < a.length && '<error' == a.substr(0, 6)) throw a;
        if (a && 7 < a.length && 'SYSTEM/' == a.substr(0, 7))
            try {
                var c = a.indexOf(':');
                if (0 < c && 'NET' == a.substr(7, 3)) {
                    var d = a.substr(0, c);
                    Da(
                        a
                            .substr(c + 1)
                            .trim()
                            .split('|'),
                        function (a, b) {
                            try {
                                w.send(d + ':' + JSON.stringify({ success: a, data: b }));
                            } catch (x) {
                                O('Failed to send command: ' + x, !0);
                            }
                        }
                    );
                } else
                    I &&
                        (0 < c
                            ? I(a.substr(0, c), a.substr(c + 1))
                            : W('Invalid system response: ' + a));
            } catch (v) {
                O('Error while processing system request: ' + v, !0);
            }
        else if (a && 3 < a.length && 'RR:' == a.substr(0, 3))
            try {
                var f = JSON.parse(a.substr(3)),
                    e = f.rr_id,
                    k = f.func,
                    m = f.args;
                J
                    ? J(k, m, function (a, b) {
                          try {
                              w.send(
                                  'RR_RESULT:' +
                                      JSON.stringify({
                                          rr_id: e,
                                          result: { result: a, error: b },
                                      })
                              );
                          } catch (x) {
                              O('Failed to send response to scan app: ' + x, !0);
                          }
                      })
                    : w.send(
                          'RR_RESULT:' +
                              JSON.stringify({
                                  rr_id: e,
                                  result: {
                                      result: null,
                                      error: 'reverseRequestHandlerFunc is not set',
                                  },
                              })
                      );
            } catch (v) {
                O('Error while processing RR: ' + v, !0);
            }
        else {
            try {
                b = JSON.parse(a);
            } catch (v) {
                W('Failed to parse JSON: ' + a);
                X(!1, 'Failed to parse JSON: ' + a, null, null, null, null, null);
                return;
            }
            b instanceof Array
                ? X(
                      b[0],
                      b[1],
                      b[2],
                      b[3],
                      b[4],
                      5 < b.length ? b[5] : null,
                      6 < b.length ? b[6] : null
                  )
                : X(!1, 'JSON returned from WebSocket is not array', null, null, null, null, null);
        }
    }
    function X(a, b, c, d, f, e, k) {
        null != f && 1 != f && W('resultCount should be null or 1, actual: ' + f);
        if (k)
            for (c = 0; c < B.length; c++)
                if (((d = B[c]), null != d && d.funcCallId == k)) {
                    O(
                        'Response is ignored for cancelled func call: ' +
                            d.funcName +
                            ', call id: ' +
                            d.funcCallId +
                            ':\n' +
                            e
                    );
                    return;
                }
        A = 'COMPLETE';
        la(a, b, e);
        if (H)
            try {
                H('func-return');
            } catch (m) {
                O('Exception occurred in event handler: ' + m, !0);
            }
        try {
            window.focus();
        } catch (m) {}
    }
    function Ea(a) {
        Ca(a.data);
    }
    function V() {
        return void 0 != w;
    }
    function Fa(a) {
        K = !0;
        Ba();
        xa(!1);
        'function' == typeof G && G();
        H && H('ready', a);
        T && 2 <= T.length && U.apply(null, Array.prototype.slice.call(T));
    }
    function Ga(a) {
        w = a;
        O('Scan WebSocket server connected: ' + w.url);
        ha && a.send('LICENSE: ' + ha);
        fa && a.send('MIN_VERSION: ' + fa);
        Fa(!0);
        za();
    }
    function Ha() {
        w = void 0;
        S(!0);
    }
    var Ia = 0,
        N = n('max_conn_attempts', -1);
    function S(a) {
        if (ea)
            if (w) (y = void 0), w.close();
            else {
                a || ((u = void 0), (Ia += 1));
                a =
                    null != window.location.href && 'http:' == window.location.href.substr(0, 5)
                        ? 'ws://127.0.0.1'
                        : 'wss://local.scannerjs.com';
                var b = 3 < a.length && 'wss' == a.substr(0, 3).toLowerCase();
                void 0 == u ? (u = t) : void 0 != y && 1e4 > new Date().getTime() - y && (u += 1);
                u % 2 != (b ? 0 : 1) && (u += 1);
                if (u < t || u > ja)
                    O('Failed to connect to WebSocket server.', !0),
                        H && H('failed-to-connect'),
                        P(),
                        (N = n('max_conn_attempts', -1)),
                        !(0 < N) || Ia < N ? S() : ((Ia = 0), H && H('failed-to-connect-final'));
                else {
                    y = new Date().getTime();
                    try {
                        b = Ja;
                        var c = a + ':' + u + '/' + ya() + '/';
                        var d = window.location.href;
                        if (null == d) var f = d;
                        else {
                            var e = d.indexOf('#');
                            f = 0 <= e ? d.substr(0, e) : d;
                        }
                        b(c + encodeURIComponent(f));
                    } catch (k) {
                        H && H('disconnected', k), Ha();
                    }
                }
            }
        else W('Scan app implementation is disabled explicitly.');
    }
    function Ka() {
        for (var a = document.getElementsByTagName('script'), b = 0; b < a.length; b++) {
            var c = a.item(b),
                d = new RegExp(L + '\\.js(\\?\\w*)?$');
            if (c.src && c.src.match(d)) return (a = c.src), a.substring(0, a.lastIndexOf('/') + 1);
        }
        return 'https://cdn.asprise.com/scannerjs/';
    }
    function ua() {
        var a;
        (a = Ka()) || (a = 'https://cdn.asprise.com/scannerjs/');
        -1 < a.indexOf('FORCE_REFRESH') &&
            -1 < window.location.href.indexOf('FORCE_REFRESH') &&
            (a = a.replace(/FORCE_REFRESH/g, 'FORCE_REFRESH_' + new Date().getTime()));
        var b = document.getElementById('com_asprise_scan_applet');
        null == b &&
            ((b = wa.versionCheck('1.7.0_45+') ? 'asprise_scan.jar' : 'asprise_scan-legacy.jar'),
            (b = Y({
                name: 'applet',
                attributes: {
                    id: 'com_asprise_scan_applet',
                    codebase: a,
                    archive: b,
                    code: 'com.asprise.imaging.scan.ui.web.ScanApplet',
                    width: 1,
                    height: 1,
                    style: 'z-index: -999;',
                },
                children: [
                    {
                        name: 'param',
                        attributes: {
                            name: 'permissions',
                            value: 'all-permissions',
                        },
                    },
                    {
                        name: 'param',
                        attributes: { name: 'java_version', value: '1.6+' },
                    },
                    {
                        name: 'param',
                        attributes: {
                            name: 'java_arguments',
                            value: '-Xmx512m',
                        },
                    },
                    {
                        name: 'param',
                        attributes: { name: 'separate_jvm', value: 'true' },
                    },
                    {
                        name: 'param',
                        attributes: { name: 'codebase_lookup', value: 'false' },
                    },
                    {
                        name: 'param',
                        attributes: { name: 'mayscript', value: 'mayscript' },
                    },
                ],
            })),
            (a = document.getElementsByTagName('body')),
            (a = null != a && 0 < a.length ? a.item(0) : null),
            null == a
                ? W(
                      'please do not execute com_asprise_scan_addScanAppletToDomIfNotExists in <header>. document.getElementsByTagName("body").length = ' +
                          document.getElementsByTagName('body').length
                  )
                : a.appendChild(b));
    }
    function xa(a) {
        if ('function' != typeof F || F(a)) D ? La(a) : (M(!1), a || La(a));
    }
    function La(a) {
        var b = document.getElementById('asprise-web-scan-setup-dialog-wrapper');
        if (a || b) {
            if (!b) {
                b = {
                    name: 'div',
                    attributes: {
                        id: 'asprise-web-scan-setup-dialog-wrapper',
                        class: 'asprise-web-scan-dialog-wrapper ' + qa,
                    },
                    children: [
                        {
                            name: 'div',
                            attributes: {
                                id: 'asprise-web-scan-setup-dialog-overlay',
                                class: 'overlay asprise-web-scan-dialog-display',
                                style: 'display: none',
                            },
                        },
                        {
                            name: 'div',
                            attributes: {
                                id: 'asprise-web-scan-setup-dialog',
                                class: 'asprise-web-scan-dialog asprise-web-scan-dialog-display',
                                style: 'display: none',
                            },
                            children: [
                                {
                                    name: 'button',
                                    attributes: {
                                        class: 'top-right-closer',
                                        title: 'Dismiss this dialog',
                                    },
                                },
                                {
                                    name: 'div',
                                    attributes: {
                                        class: 'asprise-web-scan-setup',
                                        style: 'margin: auto',
                                    },
                                    children: [
                                        {
                                            name: 'h2',
                                            attributes: {
                                                text: 'Please complete one-time setup',
                                            },
                                        },
                                        {
                                            name: 'table',
                                            attributes: {
                                                class: 'asprise-web-scan-setup-instruction',
                                            },
                                            children: [
                                                {
                                                    name: 'tr',
                                                    attributes: {
                                                        class: 'icon',
                                                    },
                                                    children: [
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                width: '33%',
                                                                class: 'download',
                                                            },
                                                        },
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                width: '33%',
                                                                class: 'run',
                                                            },
                                                        },
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                width: '33%',
                                                                class: 'enjoy',
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: 'tr',
                                                    attributes: {
                                                        class: 'after_icon',
                                                    },
                                                    children: [
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                colspan: '3',
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: 'tr',
                                                    attributes: {
                                                        class: 'text',
                                                    },
                                                    children: [
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                class: 'download',
                                                            },
                                                            children: [
                                                                {
                                                                    name: 'h3',
                                                                    children: [
                                                                        {
                                                                            name: 'a',
                                                                            attributes: {
                                                                                href: r,
                                                                                target: '_blank',
                                                                                text: 'Download',
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                                {
                                                                    name: 'p',
                                                                    children: [
                                                                        {
                                                                            name: 'a',
                                                                            attributes: {
                                                                                class: 'underline',
                                                                                href: r,
                                                                                target: '_blank',
                                                                                title: 'One time setup executable',
                                                                                text: 'Download the setup',
                                                                            },
                                                                        },
                                                                        {
                                                                            name: 'span',
                                                                            attributes: {
                                                                                text: ';',
                                                                            },
                                                                        },
                                                                        {
                                                                            name: 'br',
                                                                        },
                                                                        {
                                                                            name: 'span',
                                                                            attributes: {
                                                                                style: 'font-size: smaller',
                                                                                text: 'Other formats: ',
                                                                            },
                                                                        },
                                                                        {
                                                                            name: 'a',
                                                                            attributes: {
                                                                                style: 'font-size: smaller',
                                                                                class: 'underline',
                                                                                href:
                                                                                    r.substr(
                                                                                        0,
                                                                                        r.lastIndexOf(
                                                                                            '.'
                                                                                        )
                                                                                    ) + '.zip',
                                                                                target: '_blank',
                                                                                title: 'Zip format',
                                                                                text: 'zip',
                                                                            },
                                                                        },
                                                                        {
                                                                            name: 'span',
                                                                            attributes: {
                                                                                style: 'font-size: smaller',
                                                                                text: ' \u00b7 ',
                                                                            },
                                                                        },
                                                                        {
                                                                            name: 'a',
                                                                            attributes: {
                                                                                style: 'font-size: smaller',
                                                                                class: 'underline',
                                                                                href:
                                                                                    r.substr(
                                                                                        0,
                                                                                        r.lastIndexOf(
                                                                                            '.'
                                                                                        )
                                                                                    ) + '.7z',
                                                                                target: '_blank',
                                                                                title: '7Z format',
                                                                                text: '7z',
                                                                            },
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                class: 'run',
                                                            },
                                                            children: [
                                                                {
                                                                    name: 'h3',
                                                                    attributes: {
                                                                        text: 'Run',
                                                                    },
                                                                },
                                                                {
                                                                    name: 'p',
                                                                    attributes: {
                                                                        text: 'Run the setup, follow the instruction;',
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            name: 'td',
                                                            attributes: {
                                                                class: 'enjoy',
                                                            },
                                                            children: [
                                                                {
                                                                    name: 'h3',
                                                                    attributes: {
                                                                        text: 'Scan',
                                                                    },
                                                                },
                                                                {
                                                                    name: 'p',
                                                                    attributes: {
                                                                        text: "Viola you're ready to scan!",
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            name: 'p',
                                            children: [
                                                {
                                                    name: 'span',
                                                    attributes: {
                                                        text: 'Already have the scan app set up? ',
                                                    },
                                                },
                                                {
                                                    name: 'a',
                                                    attributes: {
                                                        class: 'underline',
                                                        href: 'AspriseWebScan://browser',
                                                        target: '_top',
                                                        text: 'Click here to enable it.',
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'div',
                            attributes: {
                                id: 'asprise-web-scan-setup-ok-dialog',
                                class: 'asprise-web-scan-dialog small-dialog asprise-web-scan-setup-ok-dialog',
                                style: 'display: none',
                            },
                            children: [
                                {
                                    name: 'button',
                                    attributes: {
                                        class: 'top-right-closer',
                                        title: 'Dismiss this dialog',
                                    },
                                },
                                {
                                    name: 'div',
                                    attributes: {
                                        class: 'asprise-web-scan-setup-ok',
                                    },
                                    children: [
                                        {
                                            name: 'div',
                                            attributes: { class: 'icon' },
                                        },
                                        {
                                            name: 'div',
                                            children: [
                                                {
                                                    name: 'p',
                                                    attributes: {
                                                        text: 'All set. You may scan now.',
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                };
                var c = document.getElementsByTagName('body');
                c = null != c && 0 < c.length ? c.item(0) : null;
                if (null == c)
                    return W('please do not execute displaySetupDialog in <header>!'), !1;
                c.appendChild(Y(b));
                if ((b = document.getElementById('asprise-web-scan-setup-dialog-wrapper'))) {
                    c = b.getElementsByClassName('top-right-closer');
                    for (var d = 0; c && d < c.length; ++d)
                        c[d].addEventListener('click', function () {
                            this.parentElement.previousElementSibling.style.display = 'none';
                            this.parentElement.style.display = 'none';
                        });
                }
            }
            a
                ? Z(b, '.asprise-web-scan-dialog-display', 'display', 'block')
                : (V()
                      ? (Z(b, '.asprise-web-scan-setup-ok-dialog', 'display', 'block'),
                        Z(b, '.asprise-web-scan-setup-ok-dialog', 'opacity', '1'),
                        Ma(b.querySelectorAll('.asprise-web-scan-setup-ok-dialog'), 2500))
                      : Z(b, '.asprise-web-scan-setup-ok-dialog', 'display', 'none'),
                  Z(b, '.asprise-web-scan-dialog-display', 'display', 'none'));
        }
    }
    function Z(a, b, c, d) {
        a = a.querySelectorAll(b);
        for (b = 0; a && b < a.length; b++) a[b].style[c] = d;
    }
    function Ma(a, b) {
        if (null != a && 0 != a.length)
            if (0 < b)
                setTimeout(function () {
                    Ma(a);
                }, b);
            else
                var c = 1,
                    d = setInterval(function () {
                        if (0 >= c) {
                            clearInterval(d);
                            for (var b = 0; b < a.length; b++) a.item(b).style.display = 'none';
                        } else {
                            for (b = 0; b < a.length; b++) a.item(b).style.opacity = c.toFixed(1);
                            c -= 0.1;
                        }
                    }, 50);
    }
    function sa() {
        for (var a = !1, b = document.getElementsByTagName('link'), c = 0; c < b.length; c++) {
            var d = b.item(c),
                f = new RegExp(L + '\\.css(\\?\\w*)?$');
            d.href && d.href.match(f) && (a = !0);
        }
        a ||
            ((a = Ka() + L + '.css'),
            (b = document.createElement('link')),
            b.setAttribute('rel', 'stylesheet'),
            b.setAttribute('type', 'text/css'),
            b.setAttribute('href', a),
            document.getElementsByTagName('head')[0].appendChild(b));
    }
    function Da(a, b) {
        if (!Array.isArray(a)) throw 'Expecting an Array, actual: ' + a;
        if (0 == a.length) b(!1, null);
        else {
            var c = a[0];
            a.splice(0, 1);
            var d = new XMLHttpRequest();
            d.open('GET', c, !0);
            d.onreadystatechange = function () {
                d.readyState === XMLHttpRequest.DONE &&
                    (200 <= d.status && 300 > d.status
                        ? b(!0, d.responseText)
                        : (O('Failed to ' + c + ': ' + d.statusText, !0), Da(a, b)));
            };
            d.send();
        }
    }
    function Ja(a) {
        if ('WebSocket' in window) var b = new WebSocket(a);
        else if ('MozWebSocket' in window) b = new MozWebSocket(a);
        else return;
        'function' === typeof Ga
            ? (b.onopen = function () {
                  Ga(b);
              })
            : (O('No onOpenFunc specified for ' + a),
              (b.onopen = function () {
                  O('WebSocket [' + b.url + '] opens.');
              }));
        'function' === typeof Ha
            ? (b.onclose = function (a) {
                  z = a;
                  Ha();
              })
            : (O('No onCloseFunc specified for ' + a),
              (b.onclose = function (a) {
                  z = a;
                  O(
                      'WebSocket [' +
                          b.url +
                          '] closes: ' +
                          a.code +
                          ' / ' +
                          a.reason +
                          ' / clean? ' +
                          a.A
                  );
              }));
        'function' === typeof Ea
            ? ((b.onmessage = function (a) {
                  Ea(a);
              }),
              (b.onerror = function (a) {
                  ka = a;
                  O('WebSocket [' + b.url + '] error occurs:' + JSON.stringify(a));
              }),
              H && H('disconnected', void 0))
            : W('You must specify onMesgFunc for ' + a);
    }
    function R() {
        return (
            'function' === typeof atob &&
            'function' === typeof ArrayBuffer &&
            'function' === typeof Uint8Array &&
            'function' === typeof Blob &&
            'function' === typeof FormData
        );
    }
    function ca(a, b) {
        if (!R()) return W('base64ToBlob() is not supported in legacy browsers.'), null;
        if (null != a && 0 == a.indexOf('data:')) {
            var c = a.indexOf(';');
            !b && 0 < c && (b = a.substring(5, c));
            c = a.indexOf('base64,');
            0 < c && (a = a.substr(c + 7));
        }
        a = a.replace(/(\r\n|\n|\r)/gm, '');
        a = atob(a);
        c = a.length;
        var d = new ArrayBuffer(c);
        d = new Uint8Array(d);
        for (var f = 0; f < c; f++) d[f] = a.charCodeAt(f);
        a = new Blob([d], { type: b });
        if (!e) {
            c = new Date();
            var e = [
                c.getFullYear(),
                c.getMonth() + 1,
                c.getDate(),
                c.getHours(),
                c.getMinutes(),
                c.getSeconds(),
            ];
            e =
                '' +
                (2e3 < e[0] ? e[0] - 2e3 : e[0]) +
                (10 > e[1] ? '0' : '') +
                e[1] +
                (10 > e[2] ? '0' : '') +
                e[2] +
                (10 > e[3] ? '0' : '') +
                e[3] +
                (10 > e[4] ? '0' : '') +
                e[4] +
                (10 > e[5] ? '0' : '') +
                e[5];
            c = c.getMilliseconds();
            d = 1;
            for (f = 0; 2 > f; f++) d *= 10;
            for (d = '' + (Math.floor(Math.random() * (d - 0 + 1)) + 0); 2 > d.length; )
                d = '0' + d;
            e = e + ((100 > c ? (10 > c ? '0' : '') + '0' : '') + c) + d;
            e =
                e +
                '.' +
                (null == b
                    ? 'unknown'
                    : 0 <= b.toLowerCase().indexOf('bmp')
                    ? 'bmp'
                    : 0 <= b.toLowerCase().indexOf('png')
                    ? 'png'
                    : 0 <= b.toLowerCase().indexOf('jp')
                    ? 'jpg'
                    : 0 <= b.toLowerCase().indexOf('tif')
                    ? 'tif'
                    : 0 <= b.toLowerCase().indexOf('pdf')
                    ? 'pdf'
                    : 'unknown');
        }
        if (e)
            try {
                (a.lastModifiedDate = new Date()), (a.name = e);
            } catch (k) {}
        return a;
    }
    function ya() {
        window.sessionStorage &&
            (sessionStorage.getItem('pageLoadId')
                ? (ba = sessionStorage.getItem('pageLoadId'))
                : sessionStorage.setItem('pageLoadId', ba));
        return ba;
    }
    function va() {
        var a = wa.getJREs();
        return void 0 == a || '' == a || (a instanceof Array && 0 == a.length) ? !1 : !0;
    }
    function P() {
        if (!('version' in Q)) return W('Invalid bowser'), !1;
        var a = Math.floor(Q.version);
        return Q.chrome ? 45 > a : Q.firefox ? 53 > a : Q.msedge ? !1 : Q.msie ? !0 : !1;
    }
    function Y(a) {
        var b = a.attributes,
            c = document.createElement(a.name);
        if (null != b) for (var d in b) c.setAttribute(d, b[d]);
        (b = null != b && 'text' in b ? b.text : void 0) &&
            c.appendChild(document.createTextNode(b));
        if (a.children instanceof Array)
            for (a = a.children, b = 0; b < a.length; b++) a[b] && c.appendChild(Y(a[b]));
        return c;
    }
    function O(a, b) {
        if (!(da > (b ? 16 : 4)))
            if (window.console) {
                var c = new Date().toLocaleTimeString();
                b
                    ? console.error
                        ? console.error(c + ' ' + a)
                        : console.log(c + ' ERROR: ' + a)
                    : console.info
                    ? console.info(c + ' ' + a)
                    : console.log(c + ' INFO: ' + a);
            } else b && window.alert && alert('ERROR: ' + a);
    }
    function W(a) {
        O(a, !0);
    }
    function ra() {
        h ||
            ((h = window.FormData.prototype.append),
            (window.FormData.prototype.append = function (a, b, c) {
                b instanceof Blob && null == c
                    ? h.apply(this, [a, b, b.name])
                    : h.apply(this, arguments);
            }));
    }
    var wa = deployJava;
    function ta() {
        if (0 != modelsToAppendToBodyFromDeployJava.length) {
            var a = document.getElementsByTagName('body');
            a = null != a && 0 < a.length ? a.item(0) : null;
            if (null == a) W('Unexcepted error - unable to get body');
            else
                for (var b = 0; b < modelsToAppendToBodyFromDeployJava.length; b++)
                    a.appendChild(Y(modelsToAppendToBodyFromDeployJava[b]));
        }
    }
    var Q = window.EXT_LIB_DEF_FUNC_BOWSER();
    delete window.EXT_LIB_DEF_FUNC_BOWSER;
    window.scannerjs = window.scannerjs || {};
    window.scannerjs.webSocketSend = function (a) {
        return w.send(a);
    };
    window.scannerjs.getWebSocket = function () {
        return w;
    };
    window.scannerjs.getWebSocketLastErrorEvent = function () {
        return ka;
    };
    window.scannerjs.getWebSocketLastCloseEvent = function () {
        return z;
    };
    window.scannerjs.doesCurrentBrowserSupportNPAPI = P;
    window.scannerjs.onAppletStarted = function (a) {
        q = !0;
        O('Applet started: ' + a);
        Fa(!1);
    };
    window.scannerjs.getRequestFuncCall = function () {
        return C;
    };
    window.scannerjs.functionReturn = X;
    window.scannerjs.getRequestStatus = function () {
        return A;
    };
    window.scannerjs.setRequestStatus = function (a) {
        return (A = a);
    };
    window.scannerjs.callFunction = U;
    window.scannerjs.scan = function (a, b, c, d) {
        if ('string' !== typeof b && (!JSON || 'function' !== typeof JSON.stringify))
            return W('JSON.stringify is not supported by your browser.'), !1;
        var f = 'string' === typeof b ? b : JSON.stringify(b);
        return U(a, 'scan', f, 3 <= arguments.length ? c : null, 4 <= arguments.length ? d : null);
    };
    window.scannerjs.listSources = function (a, b, c, d, f, e) {
        return U(
            a,
            'listSources',
            2 <= arguments.length ? b : !0,
            3 <= arguments.length ? c : null,
            4 <= arguments.length ? d : !1,
            5 <= arguments.length ? f : !0,
            6 <= arguments.length && null != e
                ? 'string' === typeof e
                    ? e
                    : JSON.stringify(e)
                : ''
        );
    };
    window.scannerjs.getSource = function (a, b, c, d, f, e, k, m) {
        return U(
            a,
            'getSource',
            2 <= arguments.length ? b : 'select',
            3 <= arguments.length ? c : !0,
            4 <= arguments.length ? d : null,
            5 <= arguments.length ? f : !0,
            6 <= arguments.length ? e : !1,
            7 <= arguments.length ? k : null,
            8 <= arguments.length && null != m
                ? 'string' === typeof m
                    ? m
                    : JSON.stringify(m)
                : ''
        );
    };
    window.scannerjs.getSystemInfo = function (a) {
        return U(a, 'asprise_scan_system_info');
    };
    window.scannerjs.initialize = M;
    window.scannerjs.getScannedImages = function (a, b, c) {
        var d = [];
        2 > arguments.length && (b = !0);
        3 > arguments.length && (c = !1);
        if (!b && !c)
            return (
                W(
                    'getImages: will return no image as neither includeOriginals nor includeThumbnails is true.'
                ),
                d
            );
        if ('string' === typeof a) {
            if (6 < a.length && '<error' == a.substr(0, 6)) throw a;
            try {
                a = JSON.parse(a);
            } catch (x) {
                throw a;
            }
        }
        if ('object' === typeof a && a.output instanceof Array)
            for (var f = a.output, e = 0; e < f.length; e++) {
                var k = f[e];
                if (
                    (b && 'return-base64' == k.type) ||
                    (c && 'return-base64-thumbnail' == k.type)
                ) {
                    var m = k.format;
                    m =
                        null == m
                            ? 'application/octet-stream'
                            : 0 <= m.toLowerCase().indexOf('bmp')
                            ? 'image/bmp'
                            : 0 <= m.toLowerCase().indexOf('png')
                            ? 'image/png'
                            : 0 <= m.toLowerCase().indexOf('jp')
                            ? 'image/jpeg'
                            : 0 <= m.toLowerCase().indexOf('tif')
                            ? 'image/tiff'
                            : 0 <= m.toLowerCase().indexOf('pdf')
                            ? 'application/pdf'
                            : 'application/octet-stream';
                    if ('application/octet-stream' == m)
                        O('Unable to find mime type for ' + k.format);
                    else if (k.result instanceof Array)
                        for (var v = 0; v < k.result.length; v++) {
                            var aa =
                                a.images instanceof Array && v < a.images.length
                                    ? a.images[v]
                                    : null;
                            d.push(
                                new l(
                                    m,
                                    !0,
                                    'data:' + m + ';base64,' + k.result[v],
                                    aa,
                                    aa ? aa.image_info : void 0,
                                    k.hasOwnProperty('selected_action')
                                        ? k.selected_action
                                        : void 0,
                                    k.hasOwnProperty('selected_filename')
                                        ? k.selected_filename
                                        : void 0
                                )
                            );
                        }
                    else O('Output contains no result records', !0);
                }
            }
        return d;
    };
    window.scannerjs.getUploadResponse = function (a) {
        if ('string' === typeof a) {
            if (6 < a.length && '<error' == a.substr(0, 6)) throw a;
            try {
                a = JSON.parse(a);
            } catch (d) {
                throw a;
            }
        }
        if ('object' === typeof a && a.output instanceof Array) {
            a = a.output;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (
                    ('upload' == c.type || 'upload-thumbnail' == c.type) &&
                    c.result instanceof Array &&
                    0 < c.result.length
                )
                    return c.result[0];
            }
        }
    };
    window.scannerjs.getSaveResponse = function (a) {
        if ('string' === typeof a) {
            if (6 < a.length && '<error' == a.substr(0, 6)) throw a;
            try {
                a = JSON.parse(a);
            } catch (d) {
                throw a;
            }
        }
        if ('object' === typeof a && a.output instanceof Array) {
            a = a.output;
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ('save' == c.type || 'save-thumbnail' == c.type) return JSON.stringify(c.result);
            }
        }
    };
    window.scannerjs.createDomElementFromModel = Y;
    window.scannerjs.submitFormWithImages = function (a, b, c) {
        if (b instanceof Array && 0 != b.length) {
            for (var d = 0; d < b.length; d++) {
                var f = b[d];
                if (!(f instanceof l)) {
                    O('Invalid image object: ' + f, !0);
                    W('Invalid image object!');
                    return;
                }
            }
            var e = document.getElementById(a);
            if (null == e) W("Form doesn't exist: " + a);
            else {
                a = new FormData(e);
                for (d = 0; d < b.length; d++)
                    (f = b[d]), f.b ? a.append(ma, ca(f.src, f.mimeType)) : a.append(oa, f.src);
                O('POST images, count: ' + b.length);
                var k = new XMLHttpRequest();
                k.open('POST', e.getAttribute('action'), !0);
                k.onreadystatechange = function () {
                    'function' == typeof c && c(k);
                };
                k.send(a);
                O('Form posted: ' + k);
                return k;
            }
        } else W('no images - form submit cancelled.');
    };
    window.scannerjs.getScannerJsConfig = n;
    window.scannerjs.cancelFuncCalls = Ba;
    window.scannerjs.logToConsole = O;
    window.scannerjs.base64ToUint8Array = function (a) {
        if (!R()) return W('base64ToBlob() is not supported in legacy browsers.'), null;
        if (null != a && 0 == a.indexOf('data:')) {
            var b = a.indexOf('base64,');
            0 < b && (a = a.substr(b + 7));
        }
        a = a.replace(/(\r\n|\n|\r)/gm, '');
        a = atob(a);
        b = a.length;
        var c = new ArrayBuffer(b);
        c = new Uint8Array(c);
        for (var d = 0; d < b; d++) c[d] = a.charCodeAt(d);
        return c;
    };
    window.scannerjs.fadeOut = Ma;
    window.scannerjs.hasJava = va;
    window.scannerjs.hasWebSocketSupport = function () {
        var a = ('WebSocket' in window && void 0 != window.WebSocket) || 'MozWebSocket' in window;
        a || W('WebSocket is not supported by this browser: ' + Q.name + ' ' + Q.version);
        return a;
    };
    window.scannerjs.isWindows = function () {
        if ('navigator' in window && void 0 != window.navigator && 'platform' in window.navigator)
            return -1 < navigator.platform.indexOf('Win');
    };
    window.scannerjs.isHttps = function () {
        return 'https:' == document.location.protocol;
    };
    window.scannerjs.version = '2.11.3';
    window.scannerjs.MIME_TYPE_BINARY = 'application/octet-stream';
    window.scannerjs.MIME_TYPE_BMP = 'image/bmp';
    window.scannerjs.MIME_TYPE_GIF = 'image/png';
    window.scannerjs.MIME_TYPE_JPEG = 'image/jpeg';
    window.scannerjs.MIME_TYPE_PNG = 'image/tiff';
    window.scannerjs.MIME_TYPE_PDF = 'application/pdf';
    window.scannerjs.EVENT_LOADED = 'loaded';
    window.scannerjs.EVENT_PRE_INIT = 'pre-init';
    window.scannerjs.EVENT_POST_INT = 'post-init';
    window.scannerjs.EVENT_FUNC_CALL = 'func-call';
    window.scannerjs.EVENT_FUNC_CANCELLED = 'func-cancelled';
    window.scannerjs.EVENT_FUNC_RETURN = 'func-return';
    window.scannerjs.EVENT_READY = 'ready';
    window.scannerjs.EVENT_FAILED_TO_CONNECT = 'failed-to-connect';
    window.scannerjs.EVENT_FAILED_TO_CONNECT_FINAL = 'failed-to-connect-final';
    window.scannerjs.EVENT_DISCONNECTED = 'disconnected';
    window.scannerjs.LOG_LEVEL_INFO = 4;
    window.scannerjs.LOG_LEVEL_ERROR = 16;
    window.scannerjs.LOG_LEVEL_ALL = 0;
    window.scannerjs.LOG_LEVEL_OFF = 1024;
    window.scannerjs.getIsInitialized = function () {
        return D;
    };
    window.scannerjs.getIsReady = function () {
        return K;
    };
    window.scannerjs.isConnectedToScanWebSocket = V;
    window.scannerjs.displaySetupDialog = La;
    window.scannerjs.doAjax = Da;
    window.scannerjs.ScannedImage = l;
    window.scannerjs.ScannedImage.prototype.getMimeType = l.prototype.v;
    window.scannerjs.ScannedImage.prototype.getSrcIsBase64 = l.prototype.w;
    window.scannerjs.ScannedImage.prototype.getImageInfo = l.prototype.s;
    window.scannerjs.ScannedImage.prototype.getInfo = l.prototype.u;
    window.scannerjs.ScannedImage.prototype.getWidth = l.prototype.h;
    window.scannerjs.ScannedImage.prototype.getHeight = l.prototype.f;
    window.scannerjs.ScannedImage.prototype.isColor = l.prototype.j;
    window.scannerjs.ScannedImage.prototype.isGray = l.prototype.l;
    window.scannerjs.ScannedImage.prototype.isBlackWhite = l.prototype.i;
    window.scannerjs.ScannedImage.prototype.getResolution = l.prototype.g;
    window.scannerjs.ScannedImage.prototype.getBitsPerPixel = l.prototype.c;
    window.scannerjs.ScannedImage.prototype.getBase64NoPrefix = l.prototype.o;
    window.scannerjs.ScannedImage.prototype.toString = l.prototype.toString;
    'scanner' in window || (window.scanner = window.scannerjs);
    'ScannedImage' in window || (window.ScannedImage = window.scannerjs.ScannedImage);
    window &&
        (window.addEventListener
            ? window.addEventListener('load', function () {
                  pa && M(!1);
              })
            : window.attachEvent &&
              window.attachEvent('onload', function () {
                  pa && M(!1);
              }));
    try {
        H && H('loaded');
    } catch (a) {}
}).call(window);
