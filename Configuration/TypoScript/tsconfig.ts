@import 'EXT:pnbase/Configuration/PageTS/Mod/WebLayout/BackendLayouts/'

# --- TCEMAIN ---
# Default backend usergroup and rights for new pages
TCEMAIN {
    permissions {
        # default begroup owner of new pages
        groupid = 1
        # allowed actions: show,edit,delete,new,editcontent
        user = show,edit,delete,new,editcontent
        group = show,edit,delete,new,editcontent
        everybody =
    }
    clearCacheCmd = all
    #translateToHidden = 1
}

# --- RTE ---
RTE.default.preset = minimal
# minimal, default, full
RTE.config.tt_content.bodytext.preset = custom

# --- TCEFORM.tt_content ---
TCEFORM.tt_content {
    header_layout {
        # 0 = 1 (H1), 100 hidden
        removeItems = 0,0
        #removeItems = 0,100
        altLabels {
            1 = H1
            2 = H2
            3 = H3
            4 = H4
            5 = H5
        }
        #addItems.6 = H3 (special)
    }

}

# --- TCAdefaults.tt_content ---
TCAdefaults.tt_content {
    # Default header layout is h2
    header_layout = 2
    # show in section menu
    sectionIndex = 1
    # default frame_class
    frame_class = none
    # default image cols (instead of 2)
    imagecols = 1
}

TCEFORM.tt_content.frame_class {
	removeItems = indent, indent-left, indent-right
	#addItems {
		#with-shadow = With Shadow
	#}
}