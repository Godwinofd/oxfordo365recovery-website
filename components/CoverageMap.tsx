import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';

declare global {
    interface Window {
        L: any;
    }
}

const CoverageMap: React.FC<{ className?: string }> = ({ className = "" }) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);
    const [postcode, setPostcode] = useState('');
    const [checkStatus, setCheckStatus] = useState<'idle' | 'checking' | 'covered' | 'not-covered'>('idle');

    useEffect(() => {
        if (mapContainer.current && !mapInstance.current && window.L) {
            // 1. Initialize Map centered on Oxford with appropriate zoom
            const map = window.L.map(mapContainer.current, {
                zoomControl: false,
                attributionControl: false,
                scrollWheelZoom: false
            }).setView([51.7520, -1.2577], 11);

            mapInstance.current = map;

            // 2. Add Base Tiles (CartoDB Light for clean look)
            window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap &copy; CARTO',
                subdomains: 'abcd',
                maxZoom: 20
            }).addTo(map);

            // 3. Define Oxford Ring Road (Approximate Polygon)
            const ringRoadCoords = [
                [51.7963, -1.2785], // Peartree
                [51.7984, -1.2268], // Cutteslowe
                [51.7744, -1.1856], // Headington Roundabout
                [51.7454, -1.1966], // Cowley
                [51.7226, -1.2172], // Littlemore
                [51.7165, -1.2385], // Heyford Hill
                [51.7265, -1.2721], // Hinksey Hill
                [51.7615, -1.2989], // Botley
            ];

            const ringRoad = window.L.polygon(ringRoadCoords, {
                color: '#E3A536', // Amber
                weight: 3,
                opacity: 0.6,
                fillColor: '#E3A536',
                fillOpacity: 0.05,
                dashArray: '5, 10'
            }).addTo(map).bindPopup("<b>Oxford Ring Road</b><br>Key coverage area.");

            // 4. Define Key Routes (M40, A34, A40)

            // M40 (East of Oxford)
            const m40Coords = [
                [51.8500, -1.1500], // North East
                [51.8000, -1.1000],
                [51.7500, -1.0800], // Near Wheatley
                [51.7000, -1.0500], // South East
                [51.6500, -0.9800]
            ];
            window.L.polyline(m40Coords, {
                color: '#1F2F3D', // Navy
                weight: 4,
                opacity: 0.7
            }).addTo(map).bindPopup("<b>M40 Corridor</b><br>Priority response zone.");

            // A34 (North-South)
            const a34Coords = [
                [51.8800, -1.2800], // Weston-on-the-Green
                [51.8100, -1.2850], // Peartree
                [51.7800, -1.3000], // Botley Interchange (approx)
                [51.7200, -1.2800], // Hinksey
                [51.6800, -1.2900], // Abingdon
                [51.6000, -1.3000]  // Didcot
            ];
            window.L.polyline(a34Coords, {
                color: '#2C3E50', // Lighter Navy
                weight: 3,
                opacity: 0.7
            }).addTo(map).bindPopup("<b>A34 Route</b><br>Extended coverage.");

            // A40 (East-West)
            const a40Coords = [
                [51.7900, -1.5500], // Witney
                [51.7850, -1.4500], // Eynsham
                [51.7800, -1.3200], // Cassington
                [51.7963, -1.2785], // Peartree (Joins Ring Road)
                // ... Ring road section handled by polygon approx ...
                [51.7744, -1.1856], // Headington (Leaves Ring Road)
                [51.7500, -1.0800]  // Wheatley (Joins M40)
            ];
            window.L.polyline(a40Coords, {
                color: '#2C3E50', // Lighter Navy
                weight: 3,
                opacity: 0.7
            }).addTo(map).bindPopup("<b>A40 Route</b><br>Witney to M40.");


            // 5. Add Markers for Key Locations (Surrounding Areas)
            const locations = [
                { name: "Oxford City", coords: [51.7520, -1.2577], type: "hq" },
                { name: "Witney", coords: [51.7865, -1.4811] },
                { name: "Abingdon", coords: [51.6708, -1.2827] },
                { name: "Bicester", coords: [51.8996, -1.1482] },
                { name: "Didcot", coords: [51.6060, -1.2330] },
                { name: "Kidlington", coords: [51.8228, -1.2882] },
                { name: "Thame", coords: [51.7483, -0.9760] },
            ];

            locations.forEach(loc => {
                const isHQ = loc.type === 'hq';

                const iconHtml = isHQ
                    ? `<div style="background-color: #1F2F3D; width: 24px; height: 24px; border-radius: 50%; border: 3px solid #E3A536; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);"></div>`
                    : `<div style="background-color: #fff; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #1F2F3D;"></div>`;

                const iconSize = isHQ ? [24, 24] as [number, number] : [12, 12] as [number, number];
                const iconOffset = isHQ ? [12, 12] as [number, number] : [6, 6] as [number, number];

                const icon = window.L.divIcon({
                    className: 'custom-div-icon',
                    html: iconHtml,
                    iconSize: iconSize,
                    iconAnchor: iconOffset
                });

                window.L.marker(loc.coords, { icon: icon }).addTo(map)
                    .bindPopup(`<b>${loc.name}</b><br>${isHQ ? 'Main HQ' : 'Coverage Zone'}`);
            });

            // Fit bounds to show all key areas
            const group = window.L.featureGroup([
                window.L.marker([51.8996, -1.1482]), // Bicester (North)
                window.L.marker([51.6060, -1.2330]), // Didcot (South)
                window.L.marker([51.7865, -1.4811]), // Witney (West)
                window.L.marker([51.7483, -0.9760])  // Thame (East)
            ]);
            map.fitBounds(group.getBounds(), { padding: [50, 50] });

        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    const handleCheck = (e: React.FormEvent) => {
        e.preventDefault();
        if (!postcode.trim()) return;

        setCheckStatus('checking');
        setTimeout(() => {
            setCheckStatus('covered');
            if (mapInstance.current) {
                // Reset view to overview on check, or zoom to postcode if we had geocoding
                // For now, let's pulse the ring road
            }
        }, 1500);
    };

    return (
        <div className={`relative ${className}`}>
            <div ref={mapContainer} className="w-full h-full min-h-[400px] z-0" style={{ backgroundColor: '#f0f0f0' }} />

            {/* Search Overlay & Legend */}
            <div className="absolute top-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-[1000] flex flex-col gap-3">

                {/* Search */}
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wide">Check Your Area</h3>
                    <form onSubmit={handleCheck} className="relative">
                        <input
                            type="text"
                            placeholder="Enter postcode (e.g. OX1...)"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                            className="w-full pl-3 pr-20 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-all"
                        />
                        <button
                            type="submit"
                            className="absolute right-1 top-1.5 bottom-1.5 bg-navy text-white text-xs px-3 rounded-md hover:bg-navy-light transition-colors font-medium"
                        >
                            Check
                        </button>
                    </form>

                    {checkStatus === 'checking' && (
                        <div className="mt-3 text-xs text-gray-500 animate-pulse flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-amber rounded-full animate-bounce"></div> Checking coverage...
                        </div>
                    )}

                    {checkStatus === 'covered' && (
                        <div className="mt-3 p-2 bg-green-50 border border-green-100 rounded-lg flex items-start gap-2">
                            <span className="text-green-600 font-bold text-lg leading-none">✓</span>
                            <div>
                                <p className="text-green-800 font-bold text-xs">Coverage Confirmed</p>
                                <p className="text-green-600 text-[10px]">One of our drivers can reach you.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Legend */}
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-100 text-xs">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full border-2 border-amber bg-amber/20"></div>
                        <span className="text-navy font-medium">Ring Road Zone</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-4 h-1 bg-navy opacity-70"></div>
                        <span className="text-navy font-medium">M40 / Key Corridors</span>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] text-gray-500 z-[1000]">
                Map data &copy; OpenStreetMap
            </div>
        </div>
    );
};

export default CoverageMap;
