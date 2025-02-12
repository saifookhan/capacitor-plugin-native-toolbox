
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginNativeToolbox'
    s.version = '0.0.1'
    s.summary = 'Toolbox for native stuff.'
    s.license = 'MIT'
    s.homepage = '.'
    s.author = 'Dario Lehmhus'
    s.source = { :git => '.', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '12.0'
    s.dependency 'Capacitor'
  end