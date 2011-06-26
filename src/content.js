<script>
App.allowGrpDialog = false;
App.grpDialog = function (n, z, p, q) {
    if(!App.allowGrpDialog)
        return;
    try {
        var G = decodeURIComponent(n.name);
        var H = n.gids ? n.gids.split(",") : "";
        var x = App.group_manage.list();
        var v = n.oid;
        for (var B = 0, D = x.length; B < D; B += 1) {
            x[B]["checked"] = false;
            for (var A = 0, o = H.length; A < o; A += 1) {
                if (H[A] == x[B][("gid")]) {
                    x[B]["checked"] = true
                }
            }
        }
        var r = function () {
                var J = [];
                for (var K = 0; K < x.length; K++) {
                    J.push('<li><input type="checkbox" value="' + x[K]["gid"] + '" class="labelbox" name="group_dialog_' + x[K]["gid"] + '" id="group_dialog_' + x[K]["gid"] + '"' + (x[K]["checked"] ? "  checked" : "") + '/><label style="cursor:pointer;" for="group_dialog_' + x[K]["gid"] + '" title="' + Core.String.decodeHTML(Core.String.encodeHTML(x[K]["name"])) + '">' + Core.String.decodeHTML(Core.String.encodeHTML(x[K]["name"])) + "</label></li>")
                }
                return J.join("")
            };
        var s = '<div class="shareLayer groupNewBox">	                        <div class="shareTxt clearFix" id="shareTxt"><span class="lf">' + $CLTMSG.CD0062 + '</span><span class="rt gray6" id="whygroup">??????????€??????è????è????????????????????????<img title="" alt="" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" class="tipicon tip4" /></span></div>							<div class="group_nb_bg" >							    ' + (scope.groupList.length <= 0 ? '<div id="group_intro" class="group_note">???? ??????????????–°??????????€???????????????????????????????????? ??…??????¨??????????????????????€??????????????????–????????????????????????????‰??”????…??????????????????????????????????????????????????/div>' : "") + '								<ul id="group_list_D" class="group_list">' + r() + '</ul>								<div class="addNew"><a id="creategrp" href="javascript:void(0);"><em>+</em>' + $CLTMSG.CD0063 + '</a></div>                                <div id="newgrp" class="newBox" style="display:none">                	                <div class="newBox_input">                                	   <input id="group_input" type="text" value="' + $CLTMSG.CD0064 + '" class="newBox_txt"/> 									   <a href="javascript:void(0);" id="create_group" class="btn_normal"><em>' + $CLTMSG.CD0065 + '</em></a>									   <a href="javascript:void(0);" id="cancel_group">' + $CLTMSG.CD0005 + '</a>                                    </div>                                <p id="group_error" class="newBox_err error_color" style="display:none">' + $CLTMSG.CD0066 + "</p>                                </div>							</div>" + (q ? ('<div class="addNew"> ' + $CLTMSG.ZB0006 + '<input type="text" id="set_group_remark" style="color:#999" value=""/><span id="set_group_remark_err" style="display:none" class="errorTs2 error_color"></span></div>') : "") + '<div class="MIB_btn">						    <a href="javascript:void(0)" id="g_submit" class="btn_normal"><em>' + $CLTMSG.CX0036 + '</em></a>							<a href="javascript:void(0)" id="g_nogroup" class="btn_normal"><em>' + $CLTMSG.CX0126 + "</em></a>						    </div>                        </div>";
        s = s.replace(/#\{nick\}/, G);
        var F = {
            width: 390,
            zIndex: 1200,
            hidden: true
        };
        var b = new App.Dialog.BasicDialog(q ? ('<img title="" alt="" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" class="tipicon tip3">' + $CLTMSG.CD0154) : $CLTMSG.CD0059, s, F);
        var a = App.PopUp().content('	               <div id="whygroup" class="PopLayer" style="visibility:hidden;position:absolute;z-Index:1300">					    <table class="Poptips">					        <tbody><tr>					            <td class="top_l"></td>					            <td class="top_c"></td>					            <td class="top_r"></td>					        </tr>					        <tr>					            <td class="mid_l"></td>					            <td class="mid_c"><div class="layerBox">					                    <div style="width: auto;" class="layerBoxCon1">					                        <div class="PopInfo clearFix">					                            <div class="Poparrow4"></div>					                            <div style="width: auto" class="iconntent clearFix">					                                <!--??????????????????€??§????-->					                                <div style="width: 205px; height: 50px;">													   ??€??&nbsp;' + $CLTMSG.CC6701 + "<br />                                                       ??€??&nbsp;" + $CLTMSG.CC6702 + "<br />                                                       ??€??&nbsp;" + $CLTMSG.CC6703 + '					                                </div>					                                <!--??????????????????“?????? -->					                            </div>					                        </div>					                    </div>					                </div></td>					            <td class="mid_r"></td>					        </tr>					        <tr>					            <td class="bottom_l"></td>					            <td class="bottom_c"></td>					            <td class="bottom_r"></td>					        </tr>					    </tbody></table>                    </div>').zIndex(1300);
        a.wrap.style.display = "";
        a.wrap.style.position = "";
        var w = {
            submit: $E("g_submit"),
            shareTxt: $E("shareTxt"),
            notgroup: $E("g_nogroup"),
            creategroup: $E("create_group"),
            creategrp: $E("creategrp"),
            newgrp: $E("newgrp"),
            group_error: $E("group_error"),
            group_input: $E("group_input"),
            group_list: $E("group_list_D"),
            cancel_group: $E("cancel_group"),
            whygroup: $E("whygroup"),
            group_intro: $E("group_intro"),
            remark: $E("set_group_remark"),
            remark_err: $E("set_group_remark_err")
        };
        if (q) {
            var g = n.remarkName || (scope.nickname && Core.String.decodeHTML(decodeURIComponent(scope.nickname.remarkName))) || "";
            g = (g === "") ? $CLTMSG.ZB0007 : g;
            w.remark.value = g;
            w.remark.onfocus = function () {
                if (this.value === $CLTMSG.ZB0007) {
                    this.value = ""
                }
                this.style.color = "#333";
                w.remark_err.style.display = "none";
                w.remark_err.innerHTML = ""
            };
            Utils.Sinput.limitMaxLen(w.remark, 16);
            Utils.Sinput.limitMaxLen(w.group_input, 16);
            w.remark.onblur = function () {
                if (this.value === "") {
                    this.value = $CLTMSG.ZB0007
                }
                this.style.color = "#999"
            }
        }
        if (scope.groupList.length >= 20) {
            w.creategrp.style.display = "none"
        } else {
            w.creategrp.style.display = ""
        }
        if (scope.groupList.length <= 0) {
            w.creategrp.style.display = "none";
            w.newgrp.style.display = "";
            w.newgrp.className = "newBox newBox_noBg";
            w.submit.style.display = "";
            w.notgroup.style.display = ""
        } else {
            if (scope.groupList.length < 20) {
                w.creategrp.style.display = ""
            }
            w.newgrp.style.display = "none";
            w.newgrp.className = "newBox";
            w.submit.style.display = "";
            w.notgroup.style.display = ""
        }
        b.show();
        var m = function (K, J) {
                if (K.length != J.length) {
                    return true
                } else {
                    for (var M = 0; M < K.length; M++) {
                        for (var L = 0; L < J.length; L++) {
                            if (K[M] == J[L]) {
                                break
                            } else {
                                if (L == J.length - 1) {
                                    return true
                                }
                            }
                        }
                    }
                    return false
                }
            };
        var u = function (L, K) {
                var J = Core.Events.getEventTarget(L);
                var j = J.tagName;
                if (!j) {
                    return
                }
                j = j.toLowerCase();
                if (j === "label" || j === "input") {
                    J.parentNode.className = K ? "hover" : "";
                    Core.Events.stopEvent(L)
                } else {
                    if (j === "li") {
                        J.className = K ? "hover" : ""
                    }
                }
            };
        var C = function (K) {
                var J = Core.Events.getEventTarget(K);
                var j = J.tagName;
                if (!j) {
                    return
                }
                j = j.toLowerCase();
                if (j === "li") {
                    J.getElementsByTagName("INPUT")[0].checked = !J.getElementsByTagName("INPUT")[0].checked;
                    Core.Events.stopEvent(K)
                }
                return false
            };
        w.whygroup.onmouseover = function (j) {
            var J = Core.Dom.getXY(w.whygroup);
            Core.Dom.setXY(a.dom.whygroup, [J[0] + w.whygroup.offsetWidth + 5, J[1] - 3 + w.whygroup.offsetHeight - a.dom.whygroup.offsetHeight / 2]);
            a.dom.whygroup.style.visibility = "visible"
        };
        w.whygroup.onmouseout = function (j) {
            a.dom.whygroup.style.visibility = "hidden"
        };
        w.group_list.onmouseover = function (j) {
            u(j, true)
        };
        w.group_list.onmouseout = function (j) {
            u(j)
        };
        w.group_list.onclick = function (j) {
            C(j)
        };
        w.notgroup.onclick = function () {
            b.close();
            if (z) {
                window.location.reload(true)
            }
        };
        var h = $CLTMSG.CD0064;
        w.cancel_group.onclick = function () {
            if (scope.groupList.length <= 0) {
                b.close();
                return false
            }
            w.creategrp.style.display = "";
            w.newgrp.style.display = "none";
            w.group_input.value = h;
            w.group_error.style.display = "none"
        };
        w.group_input.onfocus = function () {
            if (w.group_input.value == h) {
                w.group_input.value = ""
            }
        };
        w.group_input.onblur = function () {
            if (Core.String.trim(w.group_input.value) == "") {
                w.group_input.value = h
            }
        };
        w.submit.onclick = function () {
            var L = App.htmlToJson(w.group_list, ["input"]);
            var j = new Array();
            for (var K in L) {
                j.push(L[K])
            }
            if ((w.group_input.value !== h && w.group_input.value !== "") || m(j, H) || (q && (J !== g))) {
                if (w.group_input.value !== h && w.group_input.value !== "") {
                    if (!I()) {
                        return false
                    }
                }
                var J = "";
                var M = {
                    group_id: j.join(","),
                    person_id: v,
                    remark: J,
                    newgroup: w.group_input.value === h ? "" : w.group_input.value,
                    atnId: (p && p.atnId) ? p.atnId : "",
                    success: function (O) {
                        App.CustomEvent.fire("window", "cardCache");
                        b.close();
                        var N = App.alert($CLTMSG.CD0067, {
                            hasBtn: false,
                            icon: 3
                        });
                        setTimeout(function () {
                            N.close()
                        }, 1800);
                        if (O && O.global) {
                            for (var Q in O.global) {
                                scope[Q] = O.global[Q]
                            }
                        }
                        try {
                            if (scope.nickname && scope.nickname.remarkName) {
                                $E("remark_name").innerHTML = "(" + scope.nickname.remarkName + ")";
                                $E("remark_name").style.display = ""
                            } else {
                                $E("remark_name").style.display = "none"
                            }
                        } catch (P) {}
                    },
                    onError: function (N) {
                        if (N.code == "M05008") {
                            w.remark_err.style.display = "";
                            w.remark_err.innerHTML = $CLTMSG.CC1205
                        } else {
                            w.remark_err.style.display = "none";
                            w.remark_err.innerHTML = ""
                        }
                        return false
                    }
                };
                if (q) {
                    J = w.remark.value === $CLTMSG.ZB0007 ? "" : w.remark.value;
                    M.remark = J
                }
                App.group_manage.addAll(M)
            } else {
                if (z) {
                    window.location.reload(true)
                }
                b.close()
            }
        };
        w.creategroup.onclick = function () {
            if (w.creategroup.locked) {
                return false
            }
            if (!I()) {
                return false
            }
            w.group_input.value = Core.String.trim(w.group_input.value);
            if (!w.group_input.value) {
                return false
            }
            w.creategroup.locked = true;
            App.group_manage.create({
                name: Core.String.trim(w.group_input.value),
                success: function (j) {
                    Core.Dom.removeNode(w.group_intro);
                    w.group_input.blur();
                    w.creategrp.style.display = "";
                    w.newgrp.style.display = "none";
                    w.group_error.style.display = "none";
                    Core.Dom.insertHTML(w.group_list, '<li><input type="checkbox" value="' + j + '" class="labelbox" name="group_dialog_' + j + '" id="group_dialog_' + j + '" checked/><label for="group_dialog_' + j + '" style="cursor:pointer" title="' + Core.String.encodeHTML(Core.String.trim(w.group_input.value)) + '">' + Core.String.encodeHTML(Core.String.trim(w.group_input.value)) + " </label></li>", "beforeend");
                    w.creategroup.locked = false;
                    w.group_input.value = h;
                    if (scope.groupList.length >= 20) {
                        setTimeout(function () {
                            w.creategrp.style.display = "none"
                        }, 20)
                    }
                    w.newgrp.className = "newBox";
                    w.submit.style.display = "";
                    w.notgroup.style.display = "";
                    w.shareTxt.innerHTML = $CLTMSG.CD0062.replace(/#\{nick\}/, G);
                    w.submit.focus();
                    App.CustomEvent.fire("window", "cardCache")
                },
                onError: function (j) {
                    w.creategroup.locked = false;
                    if (j && j.code) {
                        w.group_error.innerHTML = $SYSMSG[j.code];
                        w.group_error.style.display = ""
                    }
                    return false
                }
            })
        };
        w.creategrp.onclick = function () {
            w.creategrp.style.display = "none";
            w.newgrp.style.display = ""
        };
        w.group_input.onkeypress = function (J) {
            var j = J || window.event;
            if (j.keyCode == 13) {
                Core.Events.fireEvent(w.creategroup, "click")
            }
        };
        var I = function () {
                var K = Core.String.trim(w.group_input.value);
                if (Core.String.byteLength(K) > 16) {
                    w.group_error.innerHTML = $SYSMSG.M14010;
                    w.group_error.style.display = "";
                    return false
                }
                if (K == "" || K == h) {
                    w.group_error.innerHTML = $SYSMSG.M14014;
                    w.group_error.style.display = "";
                    return false
                }
                for (var J = 0, j = x.length; J < j; J += 1) {
                    if (Core.String.decodeHTML(x[J]["name"]) == K) {
                        w.group_error.innerHTML = $SYSMSG.M14008;
                        w.group_error.style.display = "";
                        return false
                    }
                }
                w.group_input.value = K;
                w.group_error.style.display = "none";
                return true
            };
        return b
    } catch (E) {}
};
</script>
