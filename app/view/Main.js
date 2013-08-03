Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        activeTab: 0,
        ui: 'light',
        tabBar: {
            ui: Ext.filterPlatform('blackberry') || Ext.filterPlatform('ie10') ? 'dark' : 'light',
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom'
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: '历史',
                html: '<p>Docking tabs to the bottom will automatically change their style.</p>',
                iconCls: 'time',
                cls: 'card',
            },
            {
                title: '任务',
                html: 'Badges <em>(like the 4, below)</em> can be added by setting <code>badgeText</code> when creating a tab or by using <code>setBadgeText()</code> on the tab later.',
                iconCls: 'check',
                cls: 'card dark',
                badgeText: '4'
            },
            {
                title: '统计',
                id: 'tab3',
                html: 'Badge labels will truncate if the text is wider than the tab.',
                cls: 'card',
                iconCls: 'pie',
                hidden: (Ext.filterPlatform('ie10') && Ext.os.is.Phone) ? true : false
            }
        ]
    }
    
});
