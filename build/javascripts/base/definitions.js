(function() {

  $(function() {
    var definitions, key, val, _results;
    definitions = [
      {
        word: 'dashboard',
        alt: 'dashboards',
        definition: 'A single page that displays a current and historical trends of an organization’s key performance indicators, enabling quick, informed decisions.'
      }, {
        word: 'drip email',
        alt: 'drip emails',
        definition: 'A communication strategy that sends, or &ldquo;drips&rdquo; a pre-written set of messages to users over time.'
      }, {
        word: 'effort',
        definition: 'A measure of how much work it will take to implement a feature.'
      }, {
        word: 'Key Performance Indicator',
        alt: 'kpi',
        definition: 'A performance evaluation of a specific goal. Ex.: A KPI for an online donation form could be conversion rate (total number of donations divided by the number of unique visitors).'
      }, {
        word: 'priority',
        definition: 'Priority is used to estimate the value (potential return) of a story, which we then use to determine the stories we focus on.'
      }, {
        word: 'prototype',
        definition: 'A mock version of a web application. Prototypes can be browsed like a normal website and allow developers (like us) to experiment with ideas.'
      }, {
        word: 'sprint',
        definition: 'A short work period in which pre-selected, high-priority stories are worked on. Sprints allow for quick responses to any changes in scope while remaining focused on priorities.'
      }, {
        word: 'stakeholder',
        alt: 'stakeholders',
        definition: 'A user with an interest, concern, or role in using a web application, such as customers, employees, managers, and vendors.'
      }, {
        word: 'Stand-up meeting',
        alt: 'stand up meeting',
        definition: 'A short meeting in which participants quickly share their status. We have daily stand-up meetings internally and weekly stand-up meetings with clients like you.'
      }, {
        word: 'story',
        definition: 'A concise, plain language summary that captures the who, what and why of a requirement. We use stories to determine the potential functionality of a web application.'
      }, {
        word: 'user',
        alt: 'users',
        definition: 'A person who uses or interacts with the web application. The user is always part of one or more stakeholder groups.'
      }, {
        word: 'usability testing',
        definition: 'A person who uses or interacts with the web application. The user is always part of one or more stakeholder groups.'
      }, {
        word: 'minimum viable product',
        alt: 'mvp',
        definition: 'The MVP is the smallest amount of work needed to meet the goals or metrics of a combination of stories.'
      }
    ];
    _results = [];
    for (key in definitions) {
      val = definitions[key];
      _results.push($(".service-step-body, .services .sub-head").html(function(_, html) {
        var re;
        if (($(this).text().toUpperCase().indexOf(val['word'].toUpperCase()) >= 0) || ($(this).text().toUpperCase().indexOf((val['alt'] || '').toUpperCase()) >= 0)) {
          re = new RegExp("(?!<.*?)((\\b)(" + val['word'] + "|" + val['alt'] + ")(\\b|$))(?![^<>]*?(</span>|>))", "i");
          return html.replace(re, "<span class=\"definition\" data-tooltip=\"" + val["definition"] + "\">$1</span>");
        }
      }));
    }
    return _results;
  });

}).call(this);
