/* tslint:disable:max-line-length */
module App.Template.LayoutTabContainer {
  export var html = '<div class="layout-container-tabs-list">    <% _.each(tabs, function(tab, index) { %>        <div class="layout-tab" data-tab-index="<%= index %>">            <span><%= tab.title %></span>        </div>    <% }) %></div><div class="layout-container-active-tab">    </div>';
}
