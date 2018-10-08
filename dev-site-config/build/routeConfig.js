 import placeholderSrc from '/Users/rm012685/terra/terra-clinical/node_modules/terra-dev-site/terra.png';
 import Component2 from '/Users/rm012685/terra/terra-clinical/README.md';
 import Component3 from 'terra-doc-template';
 import ContentWrapper from 'terra-dev-site/lib/app/components/ContentWrapper';
 import Component5 from '../../packages/terra-clinical-application/lib/terra-dev-site/doc/clinicalApplication.doc';
 import Component6 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/doc/clinicalDetailView.doc';
 import Component7 from '../../packages/terra-clinical-header/lib/terra-dev-site/doc/clinicalHeader.doc';
 import Component8 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/doc/clinicalItemCollection.doc';
 import Component9 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/doc/clinicalItemDisplay.doc';
 import Component10 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/doc/clinicalItemView.doc';
 import Component11 from '../../packages/terra-clinical-label-value-view/lib/terra-dev-site/doc/clinicalLabelValueView.doc';
 import Component12 from '../../packages/terra-clinical-onset-picker/lib/terra-dev-site/doc/ClinicalOnsetPicker.doc';
 import RoutingMenu from 'terra-application-layout/lib/menu/RoutingMenu';
 import { Redirect } from 'react-router-dom';
 import TerraDevSitePlaceholder from 'terra-dev-site/lib/app/common/Placeholder';
 import Component16 from '../../packages/terra-clinical-application/lib/terra-dev-site/test/Clinical Application/DefaultApplication.test';
 import Component17 from '../../packages/terra-clinical-application/lib/terra-dev-site/test/Clinical Application/NoAppDelegateApplication.test';
 import Component18 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailList/LargeItemList.test';
 import Component19 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailList/NormalItemList.test';
 import Component20 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailListItem/DefaultListItem.test';
 import Component21 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailView/DetailViewDivided.test';
 import Component22 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailView/DetailViewDividedSmallerTitles.test';
 import Component23 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailView/DetailViewNoDivider.test';
 import Component24 from '../../packages/terra-clinical-detail-view/lib/terra-dev-site/test/clinical-detail-view/DetailView/DetailViewOverflowText.test';
 import Component25 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/DefaultHeader.test';
 import Component26 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/LeftAndRightContentHeader.test';
 import Component27 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/LeftAndRightContentSubheader.test';
 import Component28 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/LeftContentHeader.test';
 import Component29 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/LongTitleAndContentHeader.test';
 import Component30 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/LongTitleHeader.test';
 import Component31 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/NoTitleRightContentHeader.test';
 import Component32 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/RightContentHeader.test';
 import Component33 from '../../packages/terra-clinical-header/lib/terra-dev-site/test/clinical-header/TitleHeader.test';
 import Component34 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionAllElements.test';
 import Component35 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionItemStyles.test';
 import Component36 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionListStyles.test';
 import Component37 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionSelectable.test';
 import Component38 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionTableStyles.test';
 import Component39 from '../../packages/terra-clinical-item-collection/lib/terra-dev-site/test/clinical-item-collection/ItemCollectionVaryingItems.test';
 import Component40 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/comment/DefaultItemComment.test';
 import Component41 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/comment/TextItemComment.test';
 import Component42 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/display/DefaultItemDisplay.test';
 import Component43 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/display/DisabledItemDisplay.test';
 import Component44 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/display/IconItemDisplay.test';
 import Component45 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/display/ScalingIconItemDisplay.test';
 import Component46 from '../../packages/terra-clinical-item-display/lib/terra-dev-site/test/clinical-item-display/display/TextStyleItemDisplay.test';
 import Component47 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/test/clinical-item-view/AccessoryItemView.test';
 import Component48 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/test/clinical-item-view/CommentItemView.test';
 import Component49 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/test/clinical-item-view/DefaultItemView.test';
 import Component50 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/test/clinical-item-view/DisplaysItemView.test';
 import Component51 from '../../packages/terra-clinical-item-view/lib/terra-dev-site/test/clinical-item-view/OverflowDisplaysItemView.test';
 import Component52 from '../../packages/terra-clinical-label-value-view/lib/terra-dev-site/test/clinical-label-value-view/DefaultLabelValueView.test';
 import Component53 from '../../packages/terra-clinical-label-value-view/lib/terra-dev-site/test/clinical-label-value-view/MultipleValueLabelValueView.test';
 import Component54 from '../../packages/terra-clinical-label-value-view/lib/terra-dev-site/test/clinical-label-value-view/NodeValueLabelValueView.test';
 import Component55 from '../../packages/terra-clinical-label-value-view/lib/terra-dev-site/test/clinical-label-value-view/TextValueLabelValueView.test';
 import Component56 from '../../packages/terra-clinical-onset-picker/lib/terra-dev-site/test/clinical-onset-picker/Default.test';
 import Component57 from '../../packages/terra-clinical-onset-picker/lib/terra-dev-site/test/clinical-onset-picker/FiveYears.test';
 import Component58 from '../../packages/terra-clinical-onset-picker/lib/terra-dev-site/test/clinical-onset-picker/LessMonth.test';
 import Component59 from '../../packages/terra-clinical-onset-picker/lib/terra-dev-site/test/clinical-onset-picker/LessYear.test';
 import Component60 from 'terra-dev-site/lib/app/components/ScreenshotWrapper';
 import Component61 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_enormous/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component62 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_huge/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component63 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_large/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component64 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_medium/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component65 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_small/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component66 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_tiny/application-spec/Renders_the_Application_with_provided_AppDelegate[default].png';
 import Component67 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_enormous/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component68 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_huge/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component69 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_large/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component70 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_medium/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component71 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_small/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component72 from '../../packages/terra-clinical-application/tests/wdio/__snapshots__/reference/en/chrome_tiny/application-spec/Renders_the_Application_without_provided_AppDelegate[default].png';
 import Component73 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component74 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component75 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component76 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component77 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component78 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_a_long_title_that_truncates[default].png';
 import Component79 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component80 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component81 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component82 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component83 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component84 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_a_long_title_that_truncates_with_content[default].png';
 import Component85 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_a_title_only[default].png';
 import Component86 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_a_title_only[default].png';
 import Component87 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_a_title_only[default].png';
 import Component88 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_a_title_only[default].png';
 import Component89 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_a_title_only[default].png';
 import Component90 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_a_title_only[default].png';
 import Component91 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_content_on_both_sides[default].png';
 import Component92 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_content_on_both_sides[default].png';
 import Component93 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_content_on_both_sides[default].png';
 import Component94 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_content_on_both_sides[default].png';
 import Component95 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_content_on_both_sides[default].png';
 import Component96 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_content_on_both_sides[default].png';
 import Component97 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_content_on_the_left[default].png';
 import Component98 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_content_on_the_left[default].png';
 import Component99 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_content_on_the_left[default].png';
 import Component100 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_content_on_the_left[default].png';
 import Component101 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_content_on_the_left[default].png';
 import Component102 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_content_on_the_left[default].png';
 import Component103 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_content_on_the_right[default].png';
 import Component104 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_content_on_the_right[default].png';
 import Component105 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_content_on_the_right[default].png';
 import Component106 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_content_on_the_right[default].png';
 import Component107 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_content_on_the_right[default].png';
 import Component108 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_content_on_the_right[default].png';
 import Component109 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_no_content[default].png';
 import Component110 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_no_content[default].png';
 import Component111 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_no_content[default].png';
 import Component112 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_no_content[default].png';
 import Component113 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_no_content[default].png';
 import Component114 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_no_content[default].png';
 import Component115 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component116 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component117 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component118 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component119 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component120 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Header_with_no_title_and_content_on_the_right[default].png';
 import Component121 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_enormous/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component122 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_huge/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component123 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_large/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component124 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_medium/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component125 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_small/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component126 from '../../packages/terra-clinical-header/tests/wdio/__snapshots__/reference/en/chrome_tiny/header-spec/Subsection_header_with_content_on_both_sides[default].png';
 import Component127 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component128 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component129 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component130 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component131 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component132 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_a_selectable_item_collection[default].png';
 import Component133 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component134 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component135 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component136 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component137 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component138 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_an_item_collection_with_all_possible_elements[default].png';
 import Component139 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component140 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component141 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component142 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component143 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component144 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_an_item_collection_with_items_with_varying_content[default].png';
 import Component145 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component146 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component147 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component148 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component149 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component150 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_an_item_collection_with_list_styles[default].png';
 import Component151 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component152 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component153 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component154 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component155 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component156 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_an_item_collection_with_styles_applied_to_list_items[default].png';
 import Component157 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component158 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component159 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component160 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component161 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component162 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_an_item_collection_with_table_styles[default].png';
 import Component163 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component164 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component165 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component166 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component167 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component168 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Displays_the_correct_collection_when_responding_to_breakpoint[default].png';
 import Component169 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component170 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component171 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component172 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component173 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component174 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Returns_child_key_for_click_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component175 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component176 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component177 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component178 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component179 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component180 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Returns_child_key_for_ENTER_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component181 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_enormous/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component182 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_huge/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component183 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_large/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component184 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_medium/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component185 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_small/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component186 from '../../packages/terra-clinical-item-collection/tests/wdio/__snapshots__/reference/en/chrome_tiny/clinical-item-collection-spec/Returns_child_key_for_SPACE_when_onSelect_is_given_to_a_selectable_item_collection[default].png';
 import Component187 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-comment-spec/Default[default].png';
 import Component188 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-comment-spec/Default[default].png';
 import Component189 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/default[default].png';
 import Component190 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-display-spec/default[default].png';
 import Component191 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_large/item-comment-spec/Default[themed].png';
 import Component192 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/disabled[default].png';
 import Component193 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-display-spec/disabled[default].png';
 import Component194 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/disabled[themed].png';
 import Component195 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/icon[default].png';
 import Component196 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-display-spec/icon[default].png';
 import Component197 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/scaling[default].png';
 import Component198 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-display-spec/scaling[default].png';
 import Component199 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-comment-spec/Text[default].png';
 import Component200 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-comment-spec/Text[default].png';
 import Component201 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/text_style[default].png';
 import Component202 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-display-spec/text_style[default].png';
 import Component203 from '../../packages/terra-clinical-item-display/tests/wdio/__snapshots__/reference/en/chrome_medium/item-display-spec/text_style[themed].png';
 import Component204 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_accessories[default].png';
 import Component205 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_accessories[default].png';
 import Component206 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_accessories[default].png';
 import Component207 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_accessories[default].png';
 import Component208 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_accessories[default].png';
 import Component209 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_accessories[default].png';
 import Component210 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_default_comment_set[default].png';
 import Component211 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_default_comment_set[default].png';
 import Component212 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_default_comment_set[default].png';
 import Component213 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_default_comment_set[default].png';
 import Component214 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_default_comment_set[default].png';
 import Component215 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_default_comment_set[default].png';
 import Component216 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_one_column_displays[default].png';
 import Component217 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_one_column_displays[default].png';
 import Component218 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_one_column_displays[default].png';
 import Component219 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_one_column_displays[default].png';
 import Component220 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_one_column_displays[default].png';
 import Component221 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_one_column_displays[default].png';
 import Component222 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_one_column_displays[themed].png';
 import Component223 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_the_full_example_truncated_-_one_truncated[default].png';
 import Component224 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_the_full_example_truncated_-_two_truncated[default].png';
 import Component225 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component226 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component227 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component228 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component229 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component230 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_the_full_example_word_wrap_-_one_column[default].png';
 import Component231 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component232 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component233 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component234 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component235 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component236 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_the_full_example_word_wrap_-_two_column[default].png';
 import Component237 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_truncated_comment_set[default].png';
 import Component238 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_truncated_comment_set[default].png';
 import Component239 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_truncated_comment_set[default].png';
 import Component240 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_truncated_comment_set[default].png';
 import Component241 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_truncated_comment_set[default].png';
 import Component242 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_truncated_comment_set[default].png';
 import Component243 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component244 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component245 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component246 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component247 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component248 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_two_column_and_start_displays[default].png';
 import Component249 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/item-view-spec/with_two_column_displays[default].png';
 import Component250 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_huge/item-view-spec/with_two_column_displays[default].png';
 import Component251 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_large/item-view-spec/with_two_column_displays[default].png';
 import Component252 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_medium/item-view-spec/with_two_column_displays[default].png';
 import Component253 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_small/item-view-spec/with_two_column_displays[default].png';
 import Component254 from '../../packages/terra-clinical-item-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/item-view-spec/with_two_column_displays[default].png';
 import Component255 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component256 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_huge/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component257 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_large/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component258 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_medium/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component259 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_small/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component260 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/label-value-view-spec/when_a_node_input_is_provided[default].png';
 import Component261 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component262 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_huge/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component263 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_large/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component264 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_medium/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component265 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_small/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component266 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/label-value-view-spec/when_a_text_input_is_provided[default].png';
 import Component267 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component268 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_huge/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component269 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_large/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component270 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_medium/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component271 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_small/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component272 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/label-value-view-spec/when_no_value_input_is_provided[default].png';
 import Component273 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/label-value-view-spec/when_no_value_input_is_provided[themed].png';
 import Component274 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_enormous/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component275 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_huge/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component276 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_large/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component277 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_medium/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component278 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_small/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component279 from '../../packages/terra-clinical-label-value-view/tests/wdio/__snapshots__/reference/en/chrome_tiny/label-value-view-spec/when_text_and_node_inputs_are_provided[default].png';
 import Component280 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component281 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component282 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component283 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component284 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component285 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Can_select_a_month_between_the_birthdate_and_current_date[default].png';
 import Component286 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component287 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component288 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component289 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component290 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component291 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Can_select_a_year_between_the_birthdate_and_current_year[default].png';
 import Component292 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component293 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component294 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component295 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component296 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component297 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_a_month_before_the_birthdate[default].png';
 import Component298 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component299 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component300 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component301 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component302 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component303 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_a_month_in_the_future[default].png';
 import Component304 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component305 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component306 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component307 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component308 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component309 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_a_year_before_the_birthdate[default].png';
 import Component310 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component311 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component312 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component313 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component314 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component315 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_a_year_in_the_future[default].png';
 import Component316 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component317 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component318 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component319 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component320 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component321 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_months_duration_if_age_is_less_than_a_month_old[default].png';
 import Component322 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component323 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component324 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component325 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component326 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component327 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_more_than_24_months[default].png';
 import Component328 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component329 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component330 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component331 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component332 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component333 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_more_than_8_weeks[default].png';
 import Component334 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component335 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component336 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component337 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component338 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component339 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_number_of_months_that_exceede_age[default].png';
 import Component340 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component341 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component342 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component343 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component344 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component345 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_number_of_weeks_that_exceede_age[default].png';
 import Component346 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component347 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component348 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component349 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component350 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component351 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_number_of_years_greater_than_age[default].png';
 import Component352 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component353 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component354 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component355 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component356 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component357 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Cannot_select_years_duration_if_age_is_less_than_a_year_old[default].png';
 import Component358 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component359 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component360 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component361 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component362 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component363 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Displays_age_inputs_when_Age_granularity_is_selected[default].png';
 import Component364 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component365 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component366 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component367 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component368 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component369 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Displays_date_input_when_Date_granularity_is_selected[default].png';
 import Component370 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component371 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component372 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component373 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component374 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component375 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Displays_month_and_year_selection_only_when_Month-Year_granularity_selected[default].png';
 import Component376 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component377 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component378 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component379 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component380 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component381 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/Displays_year_selection_only_when_Year_granularity_selected[default].png';
 import Component382 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component383 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component384 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component385 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component386 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component387 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_granularity_is_changed_an_event_is_fired_to_the_granularitySelectOnChange_callback[default].png';
 import Component388 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component389 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component390 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component391 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component392 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component393 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_onsetDate_is_changed_by_the_age_input_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component394 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component395 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component396 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component397 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component398 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component399 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_onsetDate_is_changed_by_the_ageUnit_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component400 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component401 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component402 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component403 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component404 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component405 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_onsetDate_is_changed_by_the_month_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component406 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component407 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component408 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component409 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component410 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component411 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_onsetDate_is_changed_by_the_year_select_an_event_is_fired_to_the_onsetDateInputOnChange_callback[default].png';
 import Component412 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component413 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component414 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component415 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component416 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component417 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/When_precision_is_changed_an_event_is_fired_to_the_precisionSelectOnChange_callback[default].png';
 import Component418 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_enormous/onset-spec/when_unknown_precision_selected[default].png';
 import Component419 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_huge/onset-spec/when_unknown_precision_selected[default].png';
 import Component420 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_large/onset-spec/when_unknown_precision_selected[default].png';
 import Component421 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_medium/onset-spec/when_unknown_precision_selected[default].png';
 import Component422 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_small/onset-spec/when_unknown_precision_selected[default].png';
 import Component423 from '../../packages/terra-clinical-onset-picker/tests/wdio/__snapshots__/reference/en/chrome_tiny/onset-spec/when_unknown_precision_selected[default].png';

 export default {
   'menu': {
      '/components': {
         'path': '/components',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Components',
                  'menuItems': [
                     {
                        'text': 'Clinical Application',
                        'path': '/components/terra-clinical-application/clinical-application'
                     },
                     {
                        'text': 'Clinical Detail View',
                        'path': '/components/terra-clinical-detail-view/clinical-detail-view'
                     },
                     {
                        'text': 'Clinical Header',
                        'path': '/components/terra-clinical-header/clinical-header'
                     },
                     {
                        'text': 'Clinical Item Collection',
                        'path': '/components/terra-clinical-item-collection/clinical-item-collection'
                     },
                     {
                        'text': 'Clinical Item Display',
                        'path': '/components/terra-clinical-item-display/clinical-item-display'
                     },
                     {
                        'text': 'Clinical Item View',
                        'path': '/components/terra-clinical-item-view/clinical-item-view'
                     },
                     {
                        'text': 'Clinical Label Value View',
                        'path': '/components/terra-clinical-label-value-view/clinical-label-value-view'
                     },
                     {
                        'text': 'Clinical Onset Picker',
                        'path': '/components/terra-clinical-onset-picker/clinical-onset-picker'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-application/clinical-application': {
         'path': '/tests/terra-clinical-application/clinical-application',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Application',
                  'menuItems': [
                     {
                        'text': 'Default Application',
                        'path': '/tests/terra-clinical-application/clinical-application/default-application'
                     },
                     {
                        'text': 'No App Delegate Application',
                        'path': '/tests/terra-clinical-application/clinical-application/no-app-delegate-application'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Detail List',
                  'menuItems': [
                     {
                        'text': 'Large Item List',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list'
                     },
                     {
                        'text': 'Normal Item List',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Detail View',
                  'menuItems': [
                     {
                        'text': 'Detail View Divided',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided'
                     },
                     {
                        'text': 'Detail View Divided Smaller Titles',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles'
                     },
                     {
                        'text': 'Detail View No Divider',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider'
                     },
                     {
                        'text': 'Detail View Overflow Text',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-overflow-text'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Detail View',
                  'menuItems': [
                     {
                        'text': 'Detail List',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Detail List Item',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Detail View',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view',
                        'hasSubMenu': true
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header': {
         'path': '/tests/terra-clinical-header/clinical-header',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Header',
                  'menuItems': [
                     {
                        'text': 'Default Header',
                        'path': '/tests/terra-clinical-header/clinical-header/default-header'
                     },
                     {
                        'text': 'Left And Right Content Header',
                        'path': '/tests/terra-clinical-header/clinical-header/left-and-right-content-header'
                     },
                     {
                        'text': 'Left And Right Content Subheader',
                        'path': '/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader'
                     },
                     {
                        'text': 'Left Content Header',
                        'path': '/tests/terra-clinical-header/clinical-header/left-content-header'
                     },
                     {
                        'text': 'Long Title And Content Header',
                        'path': '/tests/terra-clinical-header/clinical-header/long-title-and-content-header'
                     },
                     {
                        'text': 'Long Title Header',
                        'path': '/tests/terra-clinical-header/clinical-header/long-title-header'
                     },
                     {
                        'text': 'No Title Right Content Header',
                        'path': '/tests/terra-clinical-header/clinical-header/no-title-right-content-header'
                     },
                     {
                        'text': 'Right Content Header',
                        'path': '/tests/terra-clinical-header/clinical-header/right-content-header'
                     },
                     {
                        'text': 'Title Header',
                        'path': '/tests/terra-clinical-header/clinical-header/title-header'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Item Collection',
                  'menuItems': [
                     {
                        'text': 'Item Collection All Elements',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements'
                     },
                     {
                        'text': 'Item Collection Item Styles',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles'
                     },
                     {
                        'text': 'Item Collection List Styles',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles'
                     },
                     {
                        'text': 'Item Collection Selectable',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable'
                     },
                     {
                        'text': 'Item Collection Table Styles',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles'
                     },
                     {
                        'text': 'Item Collection Varying Items',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/comment': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/comment',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Comment',
                  'menuItems': [
                     {
                        'text': 'Default Item Comment',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'
                     },
                     {
                        'text': 'Text Item Comment',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Display',
                  'menuItems': [
                     {
                        'text': 'Default Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display'
                     },
                     {
                        'text': 'Disabled Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display'
                     },
                     {
                        'text': 'Icon Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display'
                     },
                     {
                        'text': 'Scaling Icon Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display'
                     },
                     {
                        'text': 'Text Style Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Item Display',
                  'menuItems': [
                     {
                        'text': 'Comment',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/comment',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display/display',
                        'hasSubMenu': true
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Item View',
                  'menuItems': [
                     {
                        'text': 'Accessory Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view'
                     },
                     {
                        'text': 'Comment Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view/comment-item-view'
                     },
                     {
                        'text': 'Default Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view/default-item-view'
                     },
                     {
                        'text': 'Displays Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view/displays-item-view'
                     },
                     {
                        'text': 'Overflow Displays Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Label Value View',
                  'menuItems': [
                     {
                        'text': 'Default Label Value View',
                        'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view'
                     },
                     {
                        'text': 'Multiple Value Label Value View',
                        'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view'
                     },
                     {
                        'text': 'Node Value Label Value View',
                        'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view'
                     },
                     {
                        'text': 'Text Value Label Value View',
                        'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view'
                     }
                  ]
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Clinical Onset Picker',
                  'menuItems': [
                     {
                        'text': 'Default',
                        'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/default'
                     },
                     {
                        'text': 'Five Years',
                        'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years'
                     },
                     {
                        'text': 'Less Month',
                        'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month'
                     },
                     {
                        'text': 'Less Year',
                        'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year'
                     }
                  ]
               }
            }
         }
      },
      '/tests': {
         'path': '/tests',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Tests',
                  'menuItems': [
                     {
                        'text': 'Clinical Application',
                        'path': '/tests/terra-clinical-application/clinical-application',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Detail View',
                        'path': '/tests/terra-clinical-detail-view/clinical-detail-view',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Header',
                        'path': '/tests/terra-clinical-header/clinical-header',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Item Collection',
                        'path': '/tests/terra-clinical-item-collection/clinical-item-collection',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Item Display',
                        'path': '/tests/terra-clinical-item-display/clinical-item-display',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Item View',
                        'path': '/tests/terra-clinical-item-view/clinical-item-view',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Label Value View',
                        'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Clinical Onset Picker',
                        'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker',
                        'hasSubMenu': true
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-application/terra-clinical-application/en': {
         'path': '/evidence/terra-clinical-application/terra-clinical-application/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'Renders The Application With Provided App Delegate Default',
                        'path': '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-with-provided-app-delegate-default'
                     },
                     {
                        'text': 'Renders The Application Without Provided App Delegate Default',
                        'path': '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-without-provided-app-delegate-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-application': {
         'path': '/evidence/terra-clinical-application',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Application',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-application/terra-clinical-application/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'Header With A Long Title That Truncates Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-default'
                     },
                     {
                        'text': 'Header With A Long Title That Truncates With Content Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-with-content-default'
                     },
                     {
                        'text': 'Header With A Title Only Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-title-only-default'
                     },
                     {
                        'text': 'Header With Content On Both Sides Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-both-sides-default'
                     },
                     {
                        'text': 'Header With Content On The Left Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-left-default'
                     },
                     {
                        'text': 'Header With Content On The Right Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-right-default'
                     },
                     {
                        'text': 'Header With No Content Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-content-default'
                     },
                     {
                        'text': 'Header With No Title And Content On The Right Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-title-and-content-on-the-right-default'
                     },
                     {
                        'text': 'Subsection Header With Content On Both Sides Default',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/subsection-header-with-content-on-both-sides-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-header': {
         'path': '/evidence/terra-clinical-header',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Header',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-header/terra-clinical-header/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'Displays A Selectable Item Collection Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-a-selectable-item-collection-default'
                     },
                     {
                        'text': 'Displays An Item Collection With All Possible Elements Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-all-possible-elements-default'
                     },
                     {
                        'text': 'Displays An Item Collection With Items With Varying Content Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-items-with-varying-content-default'
                     },
                     {
                        'text': 'Displays An Item Collection With List Styles Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-list-styles-default'
                     },
                     {
                        'text': 'Displays An Item Collection With Styles Applied To List Items Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-styles-applied-to-list-items-default'
                     },
                     {
                        'text': 'Displays An Item Collection With Table Styles Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-table-styles-default'
                     },
                     {
                        'text': 'Displays The Correct Collection When Responding To Breakpoint Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-the-correct-collection-when-responding-to-breakpoint-default'
                     },
                     {
                        'text': 'Returns Child Key For Click When On Select Is Given To A Selectable Item Collection Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-click-when-on-select-is-given-to-a-selectable-item-collection-default'
                     },
                     {
                        'text': 'Returns Child Key For ENTER When On Select Is Given To A Selectable Item Collection Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-enter-when-on-select-is-given-to-a-selectable-item-collection-default'
                     },
                     {
                        'text': 'Returns Child Key For SPACE When On Select Is Given To A Selectable Item Collection Default',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-space-when-on-select-is-given-to-a-selectable-item-collection-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection': {
         'path': '/evidence/terra-clinical-item-collection',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Item Collection',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'Default Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-default'
                     },
                     {
                        'text': 'Default Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-default'
                     },
                     {
                        'text': 'Default Themed',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-themed'
                     },
                     {
                        'text': 'Disabled Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-default'
                     },
                     {
                        'text': 'Disabled Themed',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-themed'
                     },
                     {
                        'text': 'Icon Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/icon-default'
                     },
                     {
                        'text': 'Scaling Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/scaling-default'
                     },
                     {
                        'text': 'Text Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-default'
                     },
                     {
                        'text': 'Text Style Default',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-default'
                     },
                     {
                        'text': 'Text Style Themed',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-themed'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display': {
         'path': '/evidence/terra-clinical-item-display',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Item Display',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'With Accessories Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-accessories-default'
                     },
                     {
                        'text': 'With Default Comment Set Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-default-comment-set-default'
                     },
                     {
                        'text': 'With One Column Displays Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-default'
                     },
                     {
                        'text': 'With One Column Displays Themed',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-themed'
                     },
                     {
                        'text': 'With The Full Example Truncated One Truncated Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-one-truncated-default'
                     },
                     {
                        'text': 'With The Full Example Truncated Two Truncated Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-two-truncated-default'
                     },
                     {
                        'text': 'With The Full Example Word Wrap One Column Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-one-column-default'
                     },
                     {
                        'text': 'With The Full Example Word Wrap Two Column Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-two-column-default'
                     },
                     {
                        'text': 'With Truncated Comment Set Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-truncated-comment-set-default'
                     },
                     {
                        'text': 'With Two Column And Start Displays Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-and-start-displays-default'
                     },
                     {
                        'text': 'With Two Column Displays Default',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-displays-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view': {
         'path': '/evidence/terra-clinical-item-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Item View',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'When A Node Input Is Provided Default',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-node-input-is-provided-default'
                     },
                     {
                        'text': 'When A Text Input Is Provided Default',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-text-input-is-provided-default'
                     },
                     {
                        'text': 'When No Value Input Is Provided Default',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-default'
                     },
                     {
                        'text': 'When No Value Input Is Provided Themed',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-themed'
                     },
                     {
                        'text': 'When Text And Node Inputs Are Provided Default',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-text-and-node-inputs-are-provided-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view': {
         'path': '/evidence/terra-clinical-label-value-view',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Label Value View',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'En',
                  'menuItems': [
                     {
                        'text': 'Can Select A Month Between The Birthdate And Current Date Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-month-between-the-birthdate-and-current-date-default'
                     },
                     {
                        'text': 'Can Select A Year Between The Birthdate And Current Year Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-year-between-the-birthdate-and-current-year-default'
                     },
                     {
                        'text': 'Cannot Select A Month Before The Birthdate Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-before-the-birthdate-default'
                     },
                     {
                        'text': 'Cannot Select A Month In The Future Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-in-the-future-default'
                     },
                     {
                        'text': 'Cannot Select A Year Before The Birthdate Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-before-the-birthdate-default'
                     },
                     {
                        'text': 'Cannot Select A Year In The Future Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-in-the-future-default'
                     },
                     {
                        'text': 'Cannot Select Months Duration If Age Is Less Than A Month Old Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-months-duration-if-age-is-less-than-a-month-old-default'
                     },
                     {
                        'text': 'Cannot Select More Than 24 Months Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-24-months-default'
                     },
                     {
                        'text': 'Cannot Select More Than 8 Weeks Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-8-weeks-default'
                     },
                     {
                        'text': 'Cannot Select Number Of Months That Exceede Age Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-months-that-exceede-age-default'
                     },
                     {
                        'text': 'Cannot Select Number Of Weeks That Exceede Age Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-weeks-that-exceede-age-default'
                     },
                     {
                        'text': 'Cannot Select Number Of Years Greater Than Age Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-years-greater-than-age-default'
                     },
                     {
                        'text': 'Cannot Select Years Duration If Age Is Less Than A Year Old Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-years-duration-if-age-is-less-than-a-year-old-default'
                     },
                     {
                        'text': 'Displays Age Inputs When Age Granularity Is Selected Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-age-inputs-when-age-granularity-is-selected-default'
                     },
                     {
                        'text': 'Displays Date Input When Date Granularity Is Selected Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-date-input-when-date-granularity-is-selected-default'
                     },
                     {
                        'text': 'Displays Month And Year Selection Only When Month Year Granularity Selected Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-month-and-year-selection-only-when-month-year-granularity-selected-default'
                     },
                     {
                        'text': 'Displays Year Selection Only When Year Granularity Selected Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-year-selection-only-when-year-granularity-selected-default'
                     },
                     {
                        'text': 'When Granularity Is Changed An Event Is Fired To The Granularity Select On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-granularity-is-changed-an-event-is-fired-to-the-granularity-select-on-change-callback-default'
                     },
                     {
                        'text': 'When Onset Date Is Changed By The Age Input An Event Is Fired To The Onset Date Input On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-input-an-event-is-fired-to-the-onset-date-input-on-change-callback-default'
                     },
                     {
                        'text': 'When Onset Date Is Changed By The Age Unit Select An Event Is Fired To The Onset Date Input On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-unit-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default'
                     },
                     {
                        'text': 'When Onset Date Is Changed By The Month Select An Event Is Fired To The Onset Date Input On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-month-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default'
                     },
                     {
                        'text': 'When Onset Date Is Changed By The Year Select An Event Is Fired To The Onset Date Input On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-year-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default'
                     },
                     {
                        'text': 'When Precision Is Changed An Event Is Fired To The Precision Select On Change Callback Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-precision-is-changed-an-event-is-fired-to-the-precision-select-on-change-callback-default'
                     },
                     {
                        'text': 'When Unknown Precision Selected Default',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-unknown-precision-selected-default'
                     }
                  ]
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker': {
         'path': '/evidence/terra-clinical-onset-picker',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Terra Clinical Onset Picker',
                  'menuItems': [{
                        'text': 'En',
                        'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en',
                        'hasSubMenu': true
                     }]
               }
            }
         }
      },
      '/evidence': {
         'path': '/evidence',
         'component': {
            'default': {
               'componentClass': RoutingMenu,
               'props': {
                  'title': 'Evidence',
                  'menuItems': [
                     {
                        'text': 'Terra Clinical Application',
                        'path': '/evidence/terra-clinical-application',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Header',
                        'path': '/evidence/terra-clinical-header',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Item Collection',
                        'path': '/evidence/terra-clinical-item-collection',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Item Display',
                        'path': '/evidence/terra-clinical-item-display',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Item View',
                        'path': '/evidence/terra-clinical-item-view',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Label Value View',
                        'path': '/evidence/terra-clinical-label-value-view',
                        'hasSubMenu': true
                     },
                     {
                        'text': 'Terra Clinical Onset Picker',
                        'path': '/evidence/terra-clinical-onset-picker',
                        'hasSubMenu': true
                     }
                  ]
               }
            }
         }
      }
   },
   'content': {
      '/home': {
         'path': '/home',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component3,
                  'props': { 'readme': Component2 }
               }
            }
         }
      },
      '/components/terra-clinical-application/clinical-application': {
         'path': '/components/terra-clinical-application/clinical-application',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component5,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-detail-view/clinical-detail-view': {
         'path': '/components/terra-clinical-detail-view/clinical-detail-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component6,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-header/clinical-header': {
         'path': '/components/terra-clinical-header/clinical-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component7,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-item-collection/clinical-item-collection': {
         'path': '/components/terra-clinical-item-collection/clinical-item-collection',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component8,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-item-display/clinical-item-display': {
         'path': '/components/terra-clinical-item-display/clinical-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component9,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-item-view/clinical-item-view': {
         'path': '/components/terra-clinical-item-view/clinical-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component10,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-label-value-view/clinical-label-value-view': {
         'path': '/components/terra-clinical-label-value-view/clinical-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component11,
                  'props': void 0
               }
            }
         }
      },
      '/components/terra-clinical-onset-picker/clinical-onset-picker': {
         'path': '/components/terra-clinical-onset-picker/clinical-onset-picker',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component12,
                  'props': void 0
               }
            }
         }
      },
      '/components': {
         'path': '/components',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/components/terra-clinical-application/clinical-application' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-application/clinical-application/default-application': {
         'path': '/tests/terra-clinical-application/clinical-application/default-application',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component16,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-application/clinical-application/no-app-delegate-application': {
         'path': '/tests/terra-clinical-application/clinical-application/no-app-delegate-application',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component17,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-application/clinical-application': {
         'path': '/tests/terra-clinical-application/clinical-application',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-application/clinical-application/default-application' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component18,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component19,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component20,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-list-item/default-list-item' }
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component21,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided-smaller-titles',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component22,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-no-divider',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component23,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-overflow-text': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-overflow-text',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component24,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-detail-view/clinical-detail-view/detail-view/detail-view-divided' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-detail-view/clinical-detail-view': {
         'path': '/tests/terra-clinical-detail-view/clinical-detail-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/default-header': {
         'path': '/tests/terra-clinical-header/clinical-header/default-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component25,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/left-and-right-content-header': {
         'path': '/tests/terra-clinical-header/clinical-header/left-and-right-content-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component26,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader': {
         'path': '/tests/terra-clinical-header/clinical-header/left-and-right-content-subheader',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component27,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/left-content-header': {
         'path': '/tests/terra-clinical-header/clinical-header/left-content-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component28,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/long-title-and-content-header': {
         'path': '/tests/terra-clinical-header/clinical-header/long-title-and-content-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component29,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/long-title-header': {
         'path': '/tests/terra-clinical-header/clinical-header/long-title-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component30,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/no-title-right-content-header': {
         'path': '/tests/terra-clinical-header/clinical-header/no-title-right-content-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component31,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/right-content-header': {
         'path': '/tests/terra-clinical-header/clinical-header/right-content-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component32,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header/title-header': {
         'path': '/tests/terra-clinical-header/clinical-header/title-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component33,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-header/clinical-header': {
         'path': '/tests/terra-clinical-header/clinical-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-header/clinical-header/default-header' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component34,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-item-styles',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component35,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-list-styles',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component36,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-selectable',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component37,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-table-styles',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component38,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-varying-items',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component39,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-collection/clinical-item-collection': {
         'path': '/tests/terra-clinical-item-collection/clinical-item-collection',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-item-collection/clinical-item-collection/item-collection-all-elements' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component40,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/comment/text-item-comment',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component41,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/comment': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/comment',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component42,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component43,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component44,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component45,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component46,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display/display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display/display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-item-display/clinical-item-display': {
         'path': '/tests/terra-clinical-item-display/clinical-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component47,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view/comment-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view/comment-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component48,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view/default-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view/default-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component49,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view/displays-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view/displays-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component50,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component51,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-item-view/clinical-item-view': {
         'path': '/tests/terra-clinical-item-view/clinical-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component52,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/multiple-value-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component53,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/node-value-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component54,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view/text-value-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component55,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-label-value-view/clinical-label-value-view': {
         'path': '/tests/terra-clinical-label-value-view/clinical-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-label-value-view/clinical-label-value-view/default-label-value-view' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker/default': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component56,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/five-years',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component57,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-month',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component58,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker/less-year',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component59,
                  'props': void 0
               }
            }
         }
      },
      '/tests/terra-clinical-onset-picker/clinical-onset-picker': {
         'path': '/tests/terra-clinical-onset-picker/clinical-onset-picker',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/tests/terra-clinical-onset-picker/clinical-onset-picker/default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/tests': {
         'path': '/tests',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-with-provided-app-delegate-default': {
         'path': '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-with-provided-app-delegate-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component61
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component62
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component63
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component64
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component65
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component66
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-without-provided-app-delegate-default': {
         'path': '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-without-provided-app-delegate-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component67
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component68
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component69
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component70
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component71
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component72
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-application/terra-clinical-application/en': {
         'path': '/evidence/terra-clinical-application/terra-clinical-application/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-application/terra-clinical-application/en/terra-clinical-application/en/renders-the-application-with-provided-app-delegate-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-application': {
         'path': '/evidence/terra-clinical-application',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component73
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component74
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component75
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component76
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component77
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component78
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-with-content-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-with-content-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component79
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component80
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component81
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component82
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component83
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component84
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-title-only-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-title-only-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component85
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component86
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component87
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component88
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component89
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component90
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-both-sides-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-both-sides-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component91
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component92
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component93
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component94
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component95
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component96
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-left-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-left-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component97
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component98
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component99
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component100
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component101
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component102
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-right-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-content-on-the-right-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component103
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component104
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component105
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component106
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component107
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component108
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-content-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-content-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component109
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component110
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component111
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component112
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component113
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component114
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-title-and-content-on-the-right-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-no-title-and-content-on-the-right-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component115
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component116
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component117
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component118
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component119
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component120
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/subsection-header-with-content-on-both-sides-default': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/subsection-header-with-content-on-both-sides-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component121
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component122
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component123
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component124
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component125
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component126
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-header/terra-clinical-header/en': {
         'path': '/evidence/terra-clinical-header/terra-clinical-header/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-header/terra-clinical-header/en/terra-clinical-header/en/header-with-a-long-title-that-truncates-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-header': {
         'path': '/evidence/terra-clinical-header',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-a-selectable-item-collection-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-a-selectable-item-collection-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component127
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component128
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component129
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component130
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component131
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component132
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-all-possible-elements-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-all-possible-elements-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component133
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component134
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component135
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component136
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component137
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component138
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-items-with-varying-content-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-items-with-varying-content-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component139
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component140
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component141
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component142
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component143
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component144
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-list-styles-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-list-styles-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component145
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component146
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component147
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component148
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component149
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component150
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-styles-applied-to-list-items-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-styles-applied-to-list-items-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component151
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component152
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component153
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component154
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component155
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component156
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-table-styles-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-an-item-collection-with-table-styles-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component157
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component158
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component159
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component160
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component161
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component162
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-the-correct-collection-when-responding-to-breakpoint-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-the-correct-collection-when-responding-to-breakpoint-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component163
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component164
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component165
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component166
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component167
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component168
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-click-when-on-select-is-given-to-a-selectable-item-collection-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-click-when-on-select-is-given-to-a-selectable-item-collection-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component169
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component170
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component171
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component172
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component173
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component174
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-enter-when-on-select-is-given-to-a-selectable-item-collection-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-enter-when-on-select-is-given-to-a-selectable-item-collection-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component175
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component176
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component177
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component178
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component179
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component180
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-space-when-on-select-is-given-to-a-selectable-item-collection-default': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/returns-child-key-for-space-when-on-select-is-given-to-a-selectable-item-collection-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component181
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component182
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component183
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component184
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component185
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component186
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en': {
         'path': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-item-collection/terra-clinical-item-collection/en/terra-clinical-item-collection/en/displays-a-selectable-item-collection-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-collection': {
         'path': '/evidence/terra-clinical-item-collection',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component189
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component190
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-themed': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-themed',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_large',
                           'contentPath': Component191
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component192
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component193
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-themed': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/disabled-themed',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_medium',
                           'contentPath': Component194
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/icon-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/icon-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component195
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component196
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/scaling-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/scaling-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component197
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component198
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component199
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component200
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-default': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component201
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component202
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-themed': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/text-style-themed',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_medium',
                           'contentPath': Component203
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display/terra-clinical-item-display/en': {
         'path': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-item-display/terra-clinical-item-display/en/terra-clinical-item-display/en/default-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-display': {
         'path': '/evidence/terra-clinical-item-display',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-accessories-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-accessories-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component204
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component205
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component206
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component207
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component208
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component209
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-default-comment-set-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-default-comment-set-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component210
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component211
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component212
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component213
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component214
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component215
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component216
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component217
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component218
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component219
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component220
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component221
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-themed': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-one-column-displays-themed',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_enormous',
                           'contentPath': Component222
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-one-truncated-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-one-truncated-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_enormous',
                           'contentPath': Component223
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-two-truncated-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-truncated-two-truncated-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_enormous',
                           'contentPath': Component224
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-one-column-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-one-column-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component225
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component226
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component227
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component228
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component229
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component230
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-two-column-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-the-full-example-word-wrap-two-column-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component231
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component232
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component233
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component234
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component235
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component236
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-truncated-comment-set-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-truncated-comment-set-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component237
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component238
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component239
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component240
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component241
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component242
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-and-start-displays-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-and-start-displays-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component243
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component244
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component245
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component246
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component247
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component248
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-displays-default': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-two-column-displays-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component249
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component250
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component251
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component252
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component253
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component254
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view/terra-clinical-item-view/en': {
         'path': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-item-view/terra-clinical-item-view/en/terra-clinical-item-view/en/with-accessories-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-item-view': {
         'path': '/evidence/terra-clinical-item-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-node-input-is-provided-default': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-node-input-is-provided-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component255
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component256
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component257
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component258
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component259
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component260
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-text-input-is-provided-default': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-text-input-is-provided-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component261
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component262
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component263
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component264
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component265
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component266
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-default': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component267
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component268
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component269
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component270
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component271
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component272
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-themed': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-no-value-input-is-provided-themed',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [{
                           'viewport': 'chrome_enormous',
                           'contentPath': Component273
                        }]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-text-and-node-inputs-are-provided-default': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-text-and-node-inputs-are-provided-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component274
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component275
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component276
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component277
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component278
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component279
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en': {
         'path': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-label-value-view/terra-clinical-label-value-view/en/terra-clinical-label-value-view/en/when-a-node-input-is-provided-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-label-value-view': {
         'path': '/evidence/terra-clinical-label-value-view',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-month-between-the-birthdate-and-current-date-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-month-between-the-birthdate-and-current-date-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component280
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component281
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component282
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component283
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component284
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component285
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-year-between-the-birthdate-and-current-year-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-year-between-the-birthdate-and-current-year-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component286
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component287
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component288
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component289
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component290
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component291
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-before-the-birthdate-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-before-the-birthdate-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component292
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component293
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component294
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component295
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component296
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component297
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-in-the-future-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-month-in-the-future-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component298
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component299
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component300
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component301
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component302
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component303
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-before-the-birthdate-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-before-the-birthdate-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component304
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component305
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component306
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component307
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component308
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component309
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-in-the-future-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-a-year-in-the-future-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component310
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component311
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component312
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component313
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component314
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component315
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-months-duration-if-age-is-less-than-a-month-old-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-months-duration-if-age-is-less-than-a-month-old-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component316
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component317
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component318
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component319
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component320
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component321
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-24-months-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-24-months-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component322
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component323
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component324
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component325
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component326
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component327
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-8-weeks-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-more-than-8-weeks-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component328
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component329
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component330
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component331
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component332
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component333
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-months-that-exceede-age-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-months-that-exceede-age-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component334
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component335
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component336
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component337
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component338
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component339
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-weeks-that-exceede-age-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-weeks-that-exceede-age-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component340
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component341
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component342
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component343
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component344
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component345
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-years-greater-than-age-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-number-of-years-greater-than-age-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component346
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component347
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component348
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component349
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component350
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component351
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-years-duration-if-age-is-less-than-a-year-old-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/cannot-select-years-duration-if-age-is-less-than-a-year-old-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component352
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component353
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component354
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component355
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component356
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component357
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-age-inputs-when-age-granularity-is-selected-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-age-inputs-when-age-granularity-is-selected-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component358
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component359
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component360
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component361
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component362
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component363
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-date-input-when-date-granularity-is-selected-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-date-input-when-date-granularity-is-selected-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component364
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component365
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component366
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component367
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component368
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component369
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-month-and-year-selection-only-when-month-year-granularity-selected-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-month-and-year-selection-only-when-month-year-granularity-selected-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component370
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component371
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component372
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component373
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component374
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component375
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-year-selection-only-when-year-granularity-selected-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/displays-year-selection-only-when-year-granularity-selected-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component376
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component377
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component378
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component379
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component380
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component381
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-granularity-is-changed-an-event-is-fired-to-the-granularity-select-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-granularity-is-changed-an-event-is-fired-to-the-granularity-select-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component382
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component383
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component384
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component385
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component386
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component387
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-input-an-event-is-fired-to-the-onset-date-input-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-input-an-event-is-fired-to-the-onset-date-input-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component388
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component389
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component390
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component391
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component392
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component393
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-unit-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-age-unit-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component394
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component395
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component396
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component397
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component398
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component399
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-month-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-month-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component400
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component401
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component402
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component403
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component404
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component405
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-year-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-onset-date-is-changed-by-the-year-select-an-event-is-fired-to-the-onset-date-input-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component406
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component407
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component408
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component409
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component410
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component411
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-precision-is-changed-an-event-is-fired-to-the-precision-select-on-change-callback-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-precision-is-changed-an-event-is-fired-to-the-precision-select-on-change-callback-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component412
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component413
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component414
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component415
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component416
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component417
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-unknown-precision-selected-default': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/when-unknown-precision-selected-default',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Component60,
                  'props': {
                     'imageConfig': [
                        {
                           'viewport': 'chrome_enormous',
                           'contentPath': Component418
                        },
                        {
                           'viewport': 'chrome_huge',
                           'contentPath': Component419
                        },
                        {
                           'viewport': 'chrome_large',
                           'contentPath': Component420
                        },
                        {
                           'viewport': 'chrome_medium',
                           'contentPath': Component421
                        },
                        {
                           'viewport': 'chrome_small',
                           'contentPath': Component422
                        },
                        {
                           'viewport': 'chrome_tiny',
                           'contentPath': Component423
                        }
                     ]
                  }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en': {
         'path': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': Redirect,
                  'props': { 'to': '/evidence/terra-clinical-onset-picker/terra-clinical-onset-picker/en/terra-clinical-onset-picker/en/can-select-a-month-between-the-birthdate-and-current-date-default' }
               }
            },
            'tiny': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence/terra-clinical-onset-picker': {
         'path': '/evidence/terra-clinical-onset-picker',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      },
      '/evidence': {
         'path': '/evidence',
         'component': {
            'default': {
               'componentClass': ContentWrapper,
               'props': {
                  'content': TerraDevSitePlaceholder,
                  'props': { 'src': placeholderSrc }
               }
            }
         }
      }
   }
};
