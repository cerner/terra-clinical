/* eslint-disable no-alert */
import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';
import CollapsibleMenuView from 'terra-collapsible-menu-view';
import IconTable from 'terra-icon/lib/icon/IconTable';
import IconFlowsheet from 'terra-icon/lib/icon/IconFlowsheet';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconSend from 'terra-icon/lib/icon/IconSend';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconFolder from 'terra-icon/lib/icon/IconFolder';
import IconTrash from 'terra-icon/lib/icon/IconTrash';

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      title="Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et."
      endContent={<div><Button text="Button" style={{ margin: '0 10px 0 10px' }} /></div>}
      collapsibleContent={(
        <CollapsibleMenuView>
          <CollapsibleMenuView.Toggle
            text="Toggle Item 1"
            key="toggle1"
            shouldCloseOnClick={false}
            isSelectable={false}
          />
          <CollapsibleMenuView.Toggle
            text="Toggle Item 2"
            key="toggle2"
            shouldCloseOnClick={false}
            isDisabled
          />
          <CollapsibleMenuView.Divider key="Divider1" />
          <CollapsibleMenuView.Item
            text="Menu Button 1"
            key="MenuButton1"
            shouldCloseOnClick={false}
            subMenuItems={[
              <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
              <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" />,
            ]}
          />
          <CollapsibleMenuView.Item
            text="Menu Button 2"
            key="MenuButton 2"
            isDisabled
            shouldCloseOnClick={false}
            subMenuItems={[
              <CollapsibleMenuView.Item text="Default Item 1" key="defaultItem1" />,
              <CollapsibleMenuView.Item text="Default Item 2" key="defaultItem2" isDisabled />,
            ]}
          />
          <CollapsibleMenuView.Divider key="Divider2" />
          <CollapsibleMenuView.ItemGroup key="ViewTypeSelection" isSelectable>
            <CollapsibleMenuView.Item
              icon={<IconTable />}
              text="Table View"
              key="tableView"
              isIconOnly
              shouldCloseOnClick={false}
            />
            <CollapsibleMenuView.Item
              icon={<IconFlowsheet />}
              text="Expanded View"
              key="expandedView"
              isIconOnly
              shouldCloseOnClick={false}
            />
            <CollapsibleMenuView.Item
              icon={<IconVisualization />}
              text="Trending View"
              key="trendingView"
              isIconOnly
              shouldCloseOnClick={false}
              isDisabled
            />
          </CollapsibleMenuView.ItemGroup>
          <CollapsibleMenuView.Divider key="Divider3" />
          <CollapsibleMenuView.Item icon={<IconSend />} text="Send Message" key="send" isIconOnly />
          <CollapsibleMenuView.ItemGroup key="messageActionGroup">
            <CollapsibleMenuView.Item icon={<IconPrinter />} text="Print Message" key="print" isIconOnly />
            <CollapsibleMenuView.Item icon={<IconFolder />} text="Move Message to Folder..." key="move" isIconOnly isDisabled />
            <CollapsibleMenuView.Item icon={<IconTrash />} text="Trash Message" key="trash" isIconOnly />
          </CollapsibleMenuView.ItemGroup>
          <CollapsibleMenuView.Divider key="Divider4" />
          <CollapsibleMenuView.Item text="Button 1" key="button1" />
          <CollapsibleMenuView.Item text="Button 2" key="button2" isDisabled />
          <CollapsibleMenuView.Item text="Button 3" key="button3" />
          <CollapsibleMenuView.Item text="Button 4" key="button4" />
        </CollapsibleMenuView>
      )}
    />
  </div>
);

export default LongTextWithContent;
