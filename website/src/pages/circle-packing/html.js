import React from 'react'
<<<<<<< HEAD
import { ResponsiveBubbleHtml, BubbleHtmlDefaultProps } from '@nivo/circle-packing'
=======
import { ResponsiveCirclePackingHtml, defaultProps } from '@nivo/circle-packing'
>>>>>>> 56ec71ff (feat(circle-packing): migrate canvas implementation to new architecture)
import { generateLibTree } from '@nivo/generators'
import ComponentTemplate from '../../components/components/ComponentTemplate'
import meta from '../../data/components/circle-packing/meta.yml'
import mapper from '../../data/components/circle-packing/mapper'
import { groups } from '../../data/components/circle-packing/props'

const generateData = () => generateLibTree()

const initialProperties = {
    margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
    },
    identity: 'name',
    value: 'loc',
<<<<<<< HEAD
    colors: { scheme: 'paired' },
    colorBy: 'depth',
=======
    colors: { scheme: 'spectral' },
    colorBy: 'depth',
    //childColor: {
    //    from: 'color',
    //    modifiers: [['darker', 0.3]],
    //},
    childColor: 'noinherit',
>>>>>>> 56ec71ff (feat(circle-packing): migrate canvas implementation to new architecture)
    padding: 1,
    leavesOnly: false,
    enableLabel: true,
    label: 'id',
    labelSkipRadius: 10,
    labelTextColor: {
        from: 'color',
        modifiers: [['darker', 0.8]],
    },
    borderWidth: 0,
    borderColor: {
        from: 'color',
        modifiers: [['darker', 0.3]],
    },
    animate: true,
<<<<<<< HEAD
    motionStiffness: 90,
    motionDamping: 12,

=======
    motionConfig: 'gentle',
>>>>>>> 56ec71ff (feat(circle-packing): migrate canvas implementation to new architecture)
    isInteractive: true,
    isZoomable: true,
}

const CirclePackingHtml = () => {
    return (
        <ComponentTemplate
            name="CirclePackingHtml"
            meta={meta.CirclePackingHtml}
            icon="circle-packing"
            flavors={meta.flavors}
            currentFlavor="html"
            properties={groups}
            initialProperties={initialProperties}
            defaultProperties={defaultProps}
            propertiesMapper={mapper}
            generateData={generateData}
            dataKey="root"
        >
            {(properties, data, theme, logAction) => {
                return (
                    <ResponsiveBubbleHtml
                        root={data}
                        {...properties}
                        theme={theme}
                        onClick={({ children, parent, ...node }) => {
                            logAction({
                                type: 'click',
                                label: `${node.id}: ${node.value}`,
                                color: node.color,
                                data: node,
                            })
                        }}
                    />
                )
            }}
        </ComponentTemplate>
    )
}

export default CirclePackingHtml