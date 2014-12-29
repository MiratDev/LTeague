$(window).load ->
  template_table = $('table.comparison').dataTable(
    sDom: '<"top"if<"clear">lp>rt<"bottom"lp><"clear">'
    order: [[ 1, "asc" ]]
    responsive: true
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]]
    oLanguage: {
      oPaginate: {
        sNext: "Next <i class='fa fa-angle-double-right'></i>"
        sPrevious: "<i class='fa fa-angle-double-left'></i> Prev"
      },
      sLengthMenu: "Show _MENU_ templates",
      sZeroRecords: "No templates to display",
      sInfo: "Showing (_START_ to _END_) templates",
      sInfoFiltered: " (filtered from _MAX_ templates)"  
    }
  );