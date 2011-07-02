<script>
var ChkGrpDialog = function(){
    var _checked = false;
    return {
        isChecked: function(){
           return _checked;
        },
        check: function() {
            if(App.grpDialogBase) {
                App.allowGrpDialog = false;
                if(!App.allowGrpDialog) {
                    App.grpDialogBase = function (n, z, p, q) { };
                }
                _checked = true;
            } else {
            }
        }
    }
};

var chkGrpDialog = new ChkGrpDialog();
window.setTimeout(function(){
    if(!chkGrpDialog.isChecked()) {
        chkGrpDialog.check();
    }
},500);

</script>
